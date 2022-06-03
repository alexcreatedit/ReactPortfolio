import React from "react";
import './App.css'
import Section from "./components/Section";
import PortfolioContainer from "./components/PortfolioContainer";
import SocialFollow from "./SocialFollow"


function App() {
  return (
    <div>
      <PortfolioContainer />
      {/* <SocialFollow /> */}
      <Section />
    </div>
  );
}

export default App;
