import React from "react";
import { Grid, makeStyles, CssBaseline } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

const BaseLayout = ({ navigation, children, footer }) => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container classes={{ root: classes.root }}>
        <Grid item>{navigation}</Grid>
        <Grid item xs>
          {children}
        </Grid>
        <Grid item>{footer}</Grid>
      </Grid>
    </React.Fragment>
  );
};

export default BaseLayout;
