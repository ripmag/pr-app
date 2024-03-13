import { useState } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
    // width: 1280,
    // height: 320,
    facingMode: "user"
  };
  
  const WebcamCapture = () => {
    const [shot, setShot] = useState('shot');
    return (
    <div>
        <Webcam
        audio={false}
          height={500}
        screenshotFormat="image/jpeg"
          width={500}
        videoConstraints={videoConstraints}
        >
        {({ getScreenshot }) => (
            <button
            onClick={() => {
                setShot(getScreenshot());
            }}
            >
            Capture photo
            </button>
        )}      
        </Webcam>
        <img src={shot} />
    </div>
  )};

  export default WebcamCapture;