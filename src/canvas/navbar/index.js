import React from "react";
import { Toolbar, Avatar, Typography } from "@material-ui/core";
import NavLink from "./navlink";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {},
  title: {
    marginLeft: theme.spacing(1),
  },
  fillSpace: {
    flexGrow: 1,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const NavBar = () => {
  const classes = useStyle();
  return (
    <Toolbar>
      <Avatar alt="Janani Arunachalam" />
      <Typography classes={{ root: classes.title }}>
        Janani Arunachalam
      </Typography>
      <div className={classes.fillSpace}></div>
      <NavLink url="#" label="about" active />
      <NavLink url="#" label="projects" />
      <NavLink url="#" label="skills" />
      <NavLink url="#" label="experience" />
      <Avatar alt="Github" className={classes.small} />
      <Avatar alt="LinkedIn" className={classes.small} />
      <Avatar alt="Mail" className={classes.small} />
    </Toolbar>
  );
};

export default NavBar;
