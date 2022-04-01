import React,{useState} from 'react'
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from 'react-image-crop';


export default function imagesmartcrop1({ src }) {
    const [crop, setCrop] = useState({ aspect: 16 / 9 });
    return(
        <>
            <ReactCrop src='https://media.architecturaldigest.com/photos/6036a727a033d667dce89d52/3:4/w_1466,h_1955,c_limit/Flying%20Spur%20V8%20-%201.jpg' crop={crop} onChange={newCrop => setCrop(newCrop)} />;

        <p>saas</p>
        </>
    ) 
  }


