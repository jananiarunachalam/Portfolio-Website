import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {},
    main: {
      padding: theme.spacing(2, 4),
    },
  }),
  { index: 1 }
);

const Footer = ({ title, caption }) => {
  const cl = useStyles();
  return (
    <Grid item classes={{ root: cl.root }} component="section" id="skills">
      <Paper classes={{ root: cl.main }} square elevation={0}>
        <Typography variant="body1">subtitle</Typography>
      </Paper>
    </Grid>
  );
};

export default Footer;
