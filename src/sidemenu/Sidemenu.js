import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

// type Props = {};
const styles = {
  list: {
    width: 250,
  }
};

class Sidemenu extends Component<Props, State> {

    render() {
        const sideList = this.getSideList();
        const { open , toggleSideMenu } = this.props;
        return (
            <Drawer open={open} onClose={toggleSideMenu}>
              <div
                tabIndex={0}
                role="button">
                {sideList}
              </div>
            </Drawer>
        );
    }

    getSideList(){
      const { classes } = this.props;
      return (
          <div className={classes.list}>
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        );
    }
}

Sidemenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidemenu);