import React, { useState } from "react";
import Resizer from "react-image-file-resizer";

export default function image() {
  const [image, setImage] = useState("");
  const [imageHeight, setImageHeight] = useState(500);
  const [imageWidth, setImageWidth] = useState(500);
  const [imageQuality, setImageQuality] = useState(50);

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        imageHeight,
        imageWidth,
        "JPEG",
        imageQuality,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const image = await resizeFile(file);
    console.log(image);
    setImage(image);
  };

  return (
    <div>
      <form>
        <input type="file" onChange={handleImageUpload} />
      </form>
      <br />
      <br />
      <br />
      <img src={image} />
      <a href={image} download="filename.jpg">Download</a>
    </div>
  );
}
