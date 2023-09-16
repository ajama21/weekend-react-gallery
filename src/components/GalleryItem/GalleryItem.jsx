import { useState } from "react";
import axios from "axios";

function GalleryItem({ item, getFreshData }) {
  const [showText, setShowText] = useState(false);

  const likingAction = (id)=>{
    axios({
      method: "PUT",
      url: "/gallery/like/"+id,
    })
      .then((response) => {
        console.log("Entire response:", response);
        // The actual array comes from the data attribute on the response
        console.log('Just the data:', response.data);

        getFreshData()
      })
      .catch(function (error) {
        console.log("Error on get:", error);
      });
  }


  return (
    <div className="oneItem">
      <div className="imageText" onClick={() => setShowText(!showText)}>
        {showText ? (
          <p>{item.description}</p>
        ) : (
          <img
            src={item.path}
            style={{ width: "auto", height: "150px", marginRight: "30px" }}
          />
        )}
      </div>
      <button onClick={()=>likingAction(item.id)}>I love this</button>
      {item.likes > 0 ? (
        <p>{item.likes} people love this </p>
      ) : (
        <p>No people love this ;(</p>
      )}
    </div>
  );
}

export default GalleryItem;
