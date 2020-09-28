import React from "react";
import { Grid, Paper, Box, Typography } from "@material-ui/core";
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
    skills: {
      marginBottom: theme.spacing(2),
    },
  }),
  { index: 1 }
);

const Skills = ({ children }) => {
  const cl = useStyles();
  return (
    <Grid item classes={{ root: cl.root }} component="section" id="skills">
      <Typography classes={{ root: cl.skills }} variant="h3">
        Skills
      </Typography>
      {children}
    </Grid>
  );
};

export default Skills;
