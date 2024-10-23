import React, { useState, useEffect } from "react";

const ImageView = ({ imageUrl }) => {
  const [showImage, setShowImage] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    // If the imageUrl is a File, create an object URL
    if (imageUrl instanceof File) {
      const objectUrl = URL.createObjectURL(imageUrl);
      setPreviewUrl(objectUrl);

      // Clean up object URL to avoid memory leaks
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      // If imageUrl is not a File (i.e., a string), use it as is (default image case)
      setPreviewUrl(imageUrl);
    }
  }, [imageUrl]);

  const handleToggleImage = () => {
    setShowImage((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Show image initially */}
      {showImage && previewUrl ? (
        <img
          src={previewUrl} // Use previewUrl, which could be a File URL or a string
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
          View Image
        </button>
      )}

      {/* Display message if no image URL */}
      {!imageUrl && !showImage && <p>No Image Available</p>}
    </div>
  );
};

export default ImageView;
