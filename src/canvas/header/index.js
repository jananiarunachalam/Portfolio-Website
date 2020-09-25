import React from "react";
import { Grid, Avatar, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      minHeight: 360,
    },
    avatar: {
      marginRight: theme.spacing(4),
      height: 128,
      width: 128,
    },
  }),
  { index: 1 }
);

const Header = ({ title, caption }) => {
  const cl = useStyles();
  return (
    <Grid container component="header" justify="center">
      <Grid item classes={{ root: cl.root }} xs={11} md={6}>
        <Avatar alt="Janani Arunachalam" classes={{ root: cl.avatar }} />
        <Box>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="body1">{caption}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
