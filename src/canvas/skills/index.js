import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(4, 8),
    },
    main: {
      minHeight: 440,
      background: "#F9DFDF",
      color: "#DB4343",
      padding: theme.spacing(2, 4),
      borderRadius: theme.spacing(4),
    },
  }),
  { index: 1 }
);

const Skills = ({ title, caption }) => {
  const cl = useStyles();
  return (
    <Grid item classes={{ root: cl.root }} component="section" id="skills">
      <Paper classes={{ root: cl.main }} elevation={0}>
        <Typography variant="h3">title</Typography>
        <Typography variant="body1">subtitle</Typography>
      </Paper>
    </Grid>
  );
};

export default Skills;
