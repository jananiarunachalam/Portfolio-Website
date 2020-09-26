import React from "react";
import { Toolbar, Avatar, Typography } from "@material-ui/core";
import NavLink from "./navlink";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: { padding: theme.spacing(1, 4) },
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
    <Toolbar classes={{ root: classes.root }}>
      <Typography>
        <strong>Janani</strong>
      </Typography>
      <div className={classes.fillSpace}></div>
      <NavLink url="#about" label="about" />
      <NavLink url="#projects" label="projects" />
      <NavLink url="#skills" label="skills" />
      <NavLink url="#experience" label="experience" />
      <div className={classes.fillSpace}></div>
      <Avatar alt="Github" className={classes.small} />
      <Avatar alt="LinkedIn" className={classes.small} />
      <Avatar alt="Mail" className={classes.small} />
    </Toolbar>
  );
};

export default NavBar;
