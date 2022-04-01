import React from "react";
import { useSmartcrop, SmartcropStatus } from "use-smartcrop";


export default function imagesmartcrop() {
    const src = "https://i.ytimg.com/vi/IvHZVyrjTxM/maxresdefault.jpg";
    // Width and height are required.
    const [cropped, error] = useSmartcrop({ src }, { width: 300, height: 300, minScale: 1.0 });
    if (error) {
      console.error(error);
      alert('Failed')
    }
  
    return (
      <div>
        {cropped && <img src={cropped} />}
      </div>
    );
}
