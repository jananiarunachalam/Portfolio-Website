import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {},
    main: {
      minHeight: 440,
      background: "#f7f5f3",
      color: "#DB4343",
      padding: theme.spacing(2, 4),
    },
  }),
  { index: 1 }
);

const About = ({ title, caption }) => {
  const cl = useStyles();
  return (
    <Grid item classes={{ root: cl.root }} component="section" id="about">
      <Paper classes={{ root: cl.main }} square elevation={0}>
        <Typography variant="h3">title</Typography>
        <Typography variant="body1">subtitle</Typography>
      </Paper>
    </Grid>
  );
};

export default About;
