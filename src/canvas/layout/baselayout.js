import React from "react";
import {
  Grid,
  makeStyles,
  CssBaseline,
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";

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
      <Grid
        container
        classes={{ root: classes.root }}
        direction="column"
        wrap="nowrap"
      >
        <Grid item>{navigation}</Grid>
        {children}
        <Grid item>{footer}</Grid>
      </Grid>
    </React.Fragment>
  );
};

export default BaseLayout;
