import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import background from '../../assets/images/day-city.jpg';
import {Link} from 'react-router-dom';

const styles = {
  list: {
    width: 250
  },
  root: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    height: '100%'
  },
  listItemText: {
    color: 'black'
  },
  listItemIcon: {
    color: 'black'
  },
  listHeader: {
    margin: '0 10px',
    width: 'auto',
  },
  listItem: {
    margin: 10,
    width: 'auto',
    '&:hover': {
      backgroundColor: 'rgba(200, 200, 200, 0.5)',
      boxShadow: 'none'
    },
    '&:focus': {
      backgroundColor: '#00acc1',
      color: '#FFFFFF',
      boxShadow: '0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)'
    },
    transition: 'all 300ms linear'
  },
  divider: {
    backgroundColor: 'black',
    height: 2.5
  },
  link: {
    textDecoration: 'none'
  }
};

class SideMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: this.getCategories()
    };
  }

  render() {
    const sideList = this.getSideList();
    const {open, toggleSideMenu, classes} = this.props;
    return (
      <Drawer open={open} onClose={toggleSideMenu}>
        <div
          tabIndex={0}
          role="button"
          className={classes.root}>
          {sideList}
        </div>
      </Drawer>
    );
  }

  getSideList() {
    const {classes} = this.props;
    return (
      <div className={classes.list}>
        <List>
          <ListItem key={'Home'} className={classes.listHeader}>
            <Icon className={classes.listItemIcon}>home</Icon>
            <ListItemText className={classes.listItemText} primary={'Home'} disableTypography={true}/>
          </ListItem>
          <Divider className={classes.divider}/>
          {this.state.categories.map(({label, icon, url}, index) => (
            <Link to={url} className={classes.link} key={label}>
              <ListItem button className={classes.listItem}>
                <Icon className={classes.listItemIcon}>{icon}</Icon>
                <ListItemText className={classes.listItemText} primary={label}
                              disableTypography={true}/>
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );
  }

  getCategories() {
    return [
      {
        label: 'Transportation',
        icon: 'commute',
        url: '/transportation'
      },
      {
        label: 'Law and justice',
        icon: 'gavel',
        url: '/LawAndJustice'
      },
      {
        label: 'Environment',
        icon: 'local_florist',
        url: '/Environment'
      },
      {
        label: 'Economics',
        icon: 'attach_money',
        url: '/Economics'
      },
      {
        label: 'Tourism',
        icon: 'flight_takeoff',
        url: '/Tourism'
      }
    ];
  }
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideMenu);
