import React, { useState } from "react";

const ImageView = ({ imageUrl }) => {
  const [showImage, setShowImage] = useState(false); 

  const handleToggleImage = () => {
    setShowImage((prev) => !prev); 
  };

  return (
    <div className="flex flex-col items-center">
      {/* Show image initially */}
      {showImage && imageUrl ? (
        <img
        //   src={imageUrl} 
        src={URL.createObjectURL(imageUrl)}
          alt="Letter Head"
          style={{
            width: "100px",
            height: "auto",
            display: "block",
            marginTop: "0px",
          }}
          onClick={handleToggleImage} 
        />
      ) : (
        <button size="small" onClick={handleToggleImage}>
          View Letter Head
        </button>
      )}

      {/* Display message if no image URL */}
      {!imageUrl && !showImage && <p>No Image Available</p>}
    </div>
  );
};

export default ImageView;
// {values.letterHead && (
                        //   <img
                        //     src={URL.createObjectURL(values.letterHead)}
                        //     alt="Letter Head Preview"
                        //     className="mt-2 w-32 h-auto border rounded"
                        //   />
                        // )}