import React from "react";
import BaseLayout from "canvas/layout/baselayout";
import NavBar from "canvas/navbar";
import Header from "canvas/header";
import Projects from "canvas/projects";
import Skills from "canvas/skills";
import Experience from "canvas/experience";
import Footer from "canvas/footer";
import About from "canvas/about";
import AddSkill from "canvas/skills/addskill";
import SkillRow from "canvas/skills/skillrow";

class PortfolioApp extends React.Component {
  render() {
    return (
      <BaseLayout navigation={<NavBar />} footer={<Footer />}>
        <Header
          title="Janani Arunachalam"
          caption="Data Science | Machine Learning | Software Engineering"
        />
        <Projects />
        <Skills>
          <SkillRow title="Data Science">
            <AddSkill color="#A7ACD9" title="Py" caption="Python"></AddSkill>
            <AddSkill color="#9E8FB2" title="Sq" caption="SQL"></AddSkill>
            <AddSkill title="Np" caption="NumPy"></AddSkill>
            <AddSkill title="Pd" caption="Pandas"></AddSkill>
            <AddSkill title="Sk" caption="Sklearn"></AddSkill>
          </SkillRow>
          <SkillRow>
            <AddSkill small title="R." caption="R"></AddSkill>
            <AddSkill small title="Dk" caption="Docker"></AddSkill>
            <AddSkill small title="Tb" caption="Tableau"></AddSkill>
            <AddSkill small title="Pt" caption="PyTorch"></AddSkill>
            <AddSkill small title="Tf" caption="Tensorflow"></AddSkill>
            <AddSkill small title="Me" caption="Microsoft Excel"></AddSkill>
            <AddSkill small title="Cv" caption="OpenCV"></AddSkill>
            <AddSkill small title="Nk" caption="nltk"></AddSkill>
          </SkillRow>

          <SkillRow title="Software Development">
            <AddSkill color="#A7ACD9" title="Re" caption="ReactJS"></AddSkill>
            <AddSkill title="Ht" caption="HTML"></AddSkill>
            <AddSkill title="Cs" caption="CSS"></AddSkill>
            <AddSkill color="#82AEB1" title="Gt" caption="Git"></AddSkill>
            <AddSkill title="Js" caption="Javascript"></AddSkill>
          </SkillRow>
          <SkillRow>
            <AddSkill small title="Ag" caption="Agile Development"></AddSkill>
            <AddSkill small title="Nj" caption="Node.js"></AddSkill>
            <AddSkill small title="Ex" caption="Express"></AddSkill>
            <AddSkill small title="Mn" caption="MongoDB"></AddSkill>
            <AddSkill small title="Dj" caption="Django"></AddSkill>
            <AddSkill small title="Rs" caption="REST API"></AddSkill>
            <AddSkill small title="Jv" caption="Java"></AddSkill>
          </SkillRow>

          <SkillRow title="Machine Learning">
            <AddSkill
              color="#A7ACD9"
              title="Li"
              caption="Linear Regression"
            ></AddSkill>
            <AddSkill title="Lo" caption="Logistic Regression"></AddSkill>
            <AddSkill
              color="#82AEB1"
              title="Sv"
              caption="Support Vector Machines"
            ></AddSkill>
            <AddSkill
              color="#A7ACD9"
              title="Kn"
              caption="K-Nearest Neighbors"
            ></AddSkill>
            <AddSkill
              color="#9E8FB2"
              title="Km"
              caption="K-Means Clustering"
            ></AddSkill>
            <AddSkill
              color="#82AEB1"
              title="Dt"
              caption="Decision Trees"
            ></AddSkill>
            <AddSkill
              color="#A7ACD9"
              title="Rf"
              caption="Random Forests"
            ></AddSkill>
            <AddSkill
              color="#9E8FB2"
              title="Pc"
              caption="Principal Component Analysis"
            ></AddSkill>
          </SkillRow>

          <SkillRow title="Cloud">
            <AddSkill color="#A7ACD9" title="Aw" caption="AWS"></AddSkill>
            <AddSkill title="Gp" caption="GCP"></AddSkill>
            <AddSkill
              color="#82AEB1"
              title="Az"
              caption="Microsoft Azure"
            ></AddSkill>
          </SkillRow>
          <SkillRow>
            <AddSkill small title="Bq" caption="BigQuery"></AddSkill>
            <AddSkill small title="Tr" caption="Terraform"></AddSkill>
          </SkillRow>
        </Skills>

        <Experience />
        <About />
      </BaseLayout>
    );
  }
}

export default PortfolioApp;
