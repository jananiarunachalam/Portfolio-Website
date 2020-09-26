import React from "react";
import BaseLayout from "canvas/layout/baselayout";
import NavBar from "canvas/navbar";
import Header from "canvas/header";
import Projects from "canvas/projects";
import Skills from "canvas/skills";
import Experience from "canvas/experience";

class PortfolioApp extends React.Component {
  render() {
    return (
      <BaseLayout navigation={<NavBar />} footer="footer">
        <Header
          title="Janani Arunachalam"
          caption="Data Science | Machine Learning | Software Engineering"
        />
        <Projects />
        <Skills />
        <Experience />
      </BaseLayout>
    );
  }
}

export default PortfolioApp;
