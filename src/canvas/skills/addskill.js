import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = ({ small, color }) =>
  makeStyles(
    (theme) => ({
      root: {
        height: small ? 96 : 128,
        width: small ? 96 : 128,
        display: "flex",
        justifyContent: "flex-start",
        alighItems: "flex-start",
        flexDirection: "column",
        backgroundColor: color || "#f3f5f7",
        color: color ? "#ffffff" : "#727272",
        borderRadius: theme.spacing(2),
        margin: theme.spacing(0.75),
        padding: theme.spacing(1.25),
      },
      title: {
        flexGrow: 1,
        fontFamily: `"Open Sans", sans-serif`,
        fontWeight: 900,
        fontSize: small ? "1.6rem" : "2.4rem",
      },
      caption: {
        fontFamily: `"Open Sans", sans-serif`,
        fontWeight: 400,
        fontSize: small ? "0.75rem" : "0.75rem",
      },
      category: {
        height: small ? 96 : 128,
        width: 256,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: color || "#f3f5f7",
        color: color ? "#ffffff" : "#727272",
        borderRadius: theme.spacing(2),
        margin: theme.spacing(0.75),
        padding: theme.spacing(1.25),
        borderColor: "#c1c1c1",
        borderWidth: 2,
        border: "solid",
      },
      catTitle: {
        flexGrow: 1,
        textAlign: "center",
        fontFamily: `"Open Sans", sans-serif`,
        fontWeight: 900,
        fontSize: small ? "0.75rem" : "1.6rem",
      },
    }),
    { index: 1 }
  );

const AddSkill = ({ title, caption, small, color, category }) => {
  const cl = useStyles({ small, color })();

  return category ? (
    <Box classes={{ root: cl.category }}>
      <Typography classes={{ root: cl.catTitle }} variant="h5">
        {category}
      </Typography>
    </Box>
  ) : (
    <Box classes={{ root: cl.root }}>
      <Typography classes={{ root: cl.title }} variant={small ? "h6" : "h3"}>
        {title}
      </Typography>
      <Typography classes={{ root: cl.caption }}>{caption}</Typography>
    </Box>
  );
};

export default AddSkill;
