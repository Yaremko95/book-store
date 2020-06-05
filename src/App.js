import React from 'react';
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from "./components/Footer";
import JumbotronComponent from "./components/JumbotronComponent";
import LatestRelease from "./components/LatestRelease";


function App() {
  return (
    <>
      <NavBar title={"Book Store"}/>
      <JumbotronComponent title={"The Biggest And Best New Publishing Out Now "} />
      <LatestRelease />
      <Footer/>
    </>
  );
}

export default App;
