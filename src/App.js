import React from "react";
import BaseLayout from "canvas/layout/baselayout";
import NavBar from "canvas/navbar";
import Header from "canvas/header";
import Projects from "canvas/projects";

class PortfolioApp extends React.Component {
  render() {
    return (
      <BaseLayout navigation={<NavBar />} footer="Footer">
        <Header
          title="Janani Arunachalam"
          caption="Data Science | Machine Learning | Software Engineering"
        />
        <Projects />
      </BaseLayout>
    );
  }
}

export default PortfolioApp;
