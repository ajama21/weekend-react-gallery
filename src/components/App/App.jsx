import React from "react";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../Header/Header";

function App() {

  let [galleryItems, setGalleryItem] = useState([]);

  // Call function so it runs once on component load
  // Similar to jQuery's document ready
  useEffect(() => {
    fetchGalleryList();
  }, []);

        // Function to get the item from the server/database
        const fetchGalleryList = () => {
          axios({
            method: 'GET',
            url: '/gallery'
          })
            .then( (response) => {
              console.log('Entire response:', response);
              // The actual array comes from the data attribute on the response
              // console.log('Just the data:', response.data);
      
              // Set data into component state
              setGalleryItem(response.data);
            })
            .catch(function (error) {
              console.log('Error on get:', error);
            });
        }

  return (
    <div className="App">
      <Header />
      <GalleryList />
    </div>
  );
}

export default App;
