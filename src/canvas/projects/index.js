import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Link,
  IconButton,
  makeStyles,
  Box,
  Chip,
} from "@material-ui/core";
import bg from "../../assets/toss/background.jpg";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      marginTop: theme.spacing(4),
    },
    main: {
      minHeight: 440,
      backgroundImage: `url(${bg})`,
      backgroundPosition: "center",
      backgroundScale: "fill",
      color: "#ffffff",
      padding: theme.spacing(2, 4),
    },
    heading: {
      flexGrow: 1,
      marginBottom: theme.spacing(2),
    },
    header: {
      marginTop: theme.spacing(5),
      display: "flex",
      flexDirection: "column",
    },
    tags: {
      marginRight: theme.spacing(1.5),
      marginBottom: theme.spacing(1.5),
      opacity: 0.75,
    },
    wrapTag: {
      width: "40%",
    },
  }),
  { index: 1 }
);

const Projects = ({ title, caption, tags }) => {
  const cl = useStyles();
  return (
    <Grid item classes={{ root: cl.root }} component="section" id="projects">
      <Paper classes={{ root: cl.main }} square elevation={0}>
        <Box classes={{ root: cl.header }}>
          <Box classes={{ root: cl.heading }}>
            <Typography variant="h3">
              {title}{" "}
              <Link>
                <IconButton></IconButton>
              </Link>
            </Typography>
            <Typography variant="body1">{caption}</Typography>
          </Box>
          <Box classes={{ root: cl.wrapTag }}>
            {tags.map((tag) => (
              <Chip classes={{ root: cl.tags }} label={tag} key={tag} />
            ))}
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Projects;
