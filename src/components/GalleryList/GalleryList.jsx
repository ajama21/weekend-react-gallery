import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import { useState, useEffect } from "react";
import axios from "axios";

function GalleryList() {
  const [galleryList, setGalleryList] = useState([])

    // Call function so it runs once on component load
  // Similar to jQuery's document ready
  useEffect(() => {
    fetchGalleryList();
  }, []);

  // Function to get the item from the server/database
  const fetchGalleryList = () => {
    axios({
      method: "GET",
      url: "/gallery",
    })
      .then((response) => {
        console.log("Entire response:", response);
        // The actual array comes from the data attribute on the response
        console.log('Just the data:', response.data);

        // Set data into component state
        setGalleryList(response.data);
      })
      .catch(function (error) {
        console.log("Error on get:", error);
      });
  };

  return (
    <div className="galleryList">
      {galleryList.map((itemImage)=>(
          <GalleryItem key={itemImage.id} item={itemImage} getFreshData={()=>fetchGalleryList()}/>
        ))}
    </div>
  );
}

export default GalleryList;
