import React from "react";
import BaseLayout from "canvas/layout/baselayout";
import NavBar from "canvas/navbar";
import Header from "canvas/header";

class PortfolioApp extends React.Component {
  render() {
    return (
      <BaseLayout navigation={<NavBar />} footer="Footer">
        <Header
          title="Janani Arunachalam"
          caption="Data Science | Machine Learning | Software Engineering"
        />
      </BaseLayout>
    );
  }
}

export default PortfolioApp;
