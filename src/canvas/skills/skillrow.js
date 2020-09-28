import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import AddSkill from "./addskill";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: "flex",
      flexDirection: "row",
    },
  }),
  { index: 1 }
);

const SkillRow = ({ children, title }) => {
  const cl = useStyles();

  return (
    <React.Fragment>
      <Box classes={{ root: cl.root }}>
        {title && <AddSkill category={title} />}
        {children}
      </Box>
    </React.Fragment>
  );
};

export default SkillRow;
