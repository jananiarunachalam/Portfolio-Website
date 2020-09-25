import React from "react";
import { Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 3),
    "&: hover": { color: "#ff5349" },
    color: "#70778f",
  },
  active: {
    padding: theme.spacing(1, 3),
    color: "#313345",
    pointerEvents: "none",
  },
}));

const NavLink = ({ url, label, active }) => {
  const classes = useStyle();
  return (
    <Link
      underline="none"
      href={url}
      classes={{ root: active ? classes.active : classes.root }}
    >
      {label}
    </Link>
  );
};

export default NavLink;
