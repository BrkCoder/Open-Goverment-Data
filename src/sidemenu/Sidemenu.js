import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";

type Props = {
  open: boolean,
  toggleSideMenu: any
};
type State = {
  categories: {label: string, icon: string}[]
};
const styles = {
  list: {
    width: 250,
  }
};

class Sidemenu extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = { 
          categories: this.getCategories()
        };
    }

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
              <ListItem key={"Topics"}>
                  <Icon>format_list_bulleted</Icon>
                  <ListItemText primary={"Topics"} />
              </ListItem>
              <Divider/>
              {this.state.categories.map(({label,icon}, index) => (
                <ListItem button key={label}>
                  <Icon>{icon}</Icon>
                  <ListItemText primary={label} />
                </ListItem>
              ))}
            </List>
          </div>
        );
    }

    getCategories(){
      return [
        {
          label: "Transportation",
          icon: "commute"
        },
        {
          label: "Law and justice",
          icon: "gavel"
        },
        {
          label: "Environment",
          icon: "local_florist"
        },
        {
          label: "Economics",
          icon: "attach_money"
        },
        {
          label: "Tourism",
          icon: "flight_takeoff"
        }
      ];
    }
}

Sidemenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidemenu);