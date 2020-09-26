import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      marginTop: theme.spacing(4),
    },
    main: {
      minHeight: 440,
      background: "#3185fc",
      color: "#ffffff",
      padding: theme.spacing(2, 4),
    },
  }),
  { index: 1 }
);

const Projects = ({ title, caption }) => {
  const cl = useStyles();
  return (
    <Grid item classes={{ root: cl.root }} component="section" id="projects">
      <Paper classes={{ root: cl.main }} square elevation={0}>
        <Typography variant="h3">title</Typography>
        <Typography variant="body1">subtitle</Typography>
      </Paper>
    </Grid>
  );
};

export default Projects;
