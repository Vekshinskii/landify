import React from "react";
import s from './app.module.css';
import Header from "../Header/Header";
import FirstSection from "../FirstSection/FirstSection";
import LogoClouds from "../LogoClouds/LogoClouds";
import TailorMadeFeatures from "../TailorMadeFeatures/TailorMadeFeatures";


function App() {
  return (
    <div className={s.app_wrapper}>
      <Header/>
      <FirstSection/>
      <LogoClouds/>
      <TailorMadeFeatures/>
    </div>
  );
}

export default App;
