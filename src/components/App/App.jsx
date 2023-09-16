import React from "react";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../Header/Header";

function App() {



  return (
    <div className="App">
      <Header />
      <GalleryList />
    </div>
  );
}

export default App;
