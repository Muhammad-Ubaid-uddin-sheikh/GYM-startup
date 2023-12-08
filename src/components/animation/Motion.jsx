// import React, { useState, useEffect } from 'react';
// import * as posenet from '@tensorflow-models/posenet';

// const App = () => {
//   const [feedback, setFeedback] = useState('');
//   const [isCameraOn, setIsCameraOn] = useState(false);

//   useEffect(() => {
//     const setupPoseNet = async () => {
//       const net = await posenet.load();
//       const video = document.getElementById('video');

//       const detectPose = async () => {
//         if (!isCameraOn) {
//           return;
//         }

//         const pose = await net.estimatePoses(video);
//         // Analyze pose and update feedback
//         setFeedback(analyzePose(pose));
//         requestAnimationFrame(detectPose);
//       };

//       video.addEventListener('play', detectPose);
//     };

//     setupPoseNet();
//   }, []);

//   const checkCamera = () => {
//     const video = document.getElementById('video');
//     setIsCameraOn(video.muted === false);
//   };

//   useEffect(() => {
//     checkCamera();
//   }, []);

//   const analyzePose = (pose) => {
//     // Implement logic to analyze pushup form based on pose data
//     // (e.g., elbow angle, shoulder position)
//     // This is a simplified example for demonstration purposes

//     const elbowAngle = calculateElbowAngle(pose);
//     if (elbowAngle < 90) {
//       return 'Push your elbows further down!';
//     } else {
//       return 'Good form!';
//     }
//   };

//   const calculateElbowAngle = (pose) => {
//     // Implement logic to calculate elbow angle based on keypoints
//     // This is a simplified example for demonstration purposes

//     const shoulder = pose.keypoints[5];
//     const elbow = pose.keypoints[7];
//     const wrist = pose.keypoints[9];

//     const angle = Math.atan2(
//       elbow.y - shoulder.y,
//       elbow.x - shoulder.x,
//     ) -
//       Math.atan2(wrist.y - elbow.y, wrist.x - elbow.x);

//     return Math.round((angle * 180) / Math.PI);
//   };

//   return (
//     <div className="App">
//       <h1>Pushup Trainer</h1>
//       <video id="video" width="640" height="480" autoPlay muted></video>
//       <p>{feedback}</p>
//       <button onClick={() => {
//         video.muted = !video.muted;
//         checkCamera();
//       }}>
//         {isCameraOn ? 'Turn Camera Off' : 'Turn Camera On'}
//       </button>
//     </div>
//   );
// };

// export default App;
// import React, { useEffect, useRef } from 'react'
// import faceapi from 'face-api.js'
// const Motion = () => {
//     const videoRef = useRef()
//     const canvasRef = useRef()

// useEffect(()=>{
//     startVideo()
//     videoRef && loadModel()
// },[])

// const startVideo = ()=>{
//     navigator.mediaDevices.getUserMedia({video:true}).then((currentStream)=>{
//         videoRef.current.srcObject=currentStream
//     })
//     .catch((err)=>{console.log(err)})
// }

// const  loadModel=()=>{
//     Promise.all([
//         faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
//         faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
//         faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
//         faceapi.nets.faceExpressionNet.loadFromUri('/models')
//     ]). then(()=>{
//         faceMyDetect
//     })
// } 

// const faceMyDetect = ()=>{
//     setInterval(async=>{
//         const detections =  faceapi.detectAllFaces(videoRef.current,
//             new faceapi.TinyFaceDetectorOptions()
//             ).withFaceLandmarks().withFaceExpressions()
//             canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current)
//             faceapi.matchDimensions(canvasRef.current,{
//                 width:940,height:650
//             })

//             const resized = faceapi.resizeResults(detections,{
//                 width:940,height:650
//             })
//             faceapi.draw.drawDetections(canvasRef.current.resized)
//             faceapi.draw.drawFaceExpressions(canvasRef.current.resized)
//             faceapi.draw.drawFaceLandmarks(canvasRef.current.resized)
            
//     },1000)
// }

//   return (
//     <div>
//         Motion
//         <div className="appProvider">
// <video crossOrigin='anonymous' ref={videoRef} autoPlay></video></div>
// <canvas ref={canvasRef} width="940" height="650" className='appCanvas' />
//     </div>
//   )
// }

// export default Motion
import React from 'react'

const Motion = () => {
  return (
    <div>Motion</div>
  )
}

export default Motion