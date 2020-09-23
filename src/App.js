import React from "react";
import BaseLayout from "canvas/layout/baselayout";
import NavBar from "canvas/navbar";

class PortfolioApp extends React.Component {
  render() {
    return (
      <BaseLayout navigation={<NavBar />} footer="Footer">
        Content
      </BaseLayout>
    );
  }
}

export default PortfolioApp;
