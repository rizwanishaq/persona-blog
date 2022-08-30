import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import MachineLearning from "./pages/MachineLearning";

import VoiceAssistant from "./pages/VoiceAssistant";
import PitchDetection from "./pages/PitchDetection";
import EventDetection from "./pages/EventDetection";
import ImageCapture from "./pages/ImageCapture";
import ObjectDetection from "./pages/ObjectDetection";
import FaceDetection from "./pages/FaceDetection";
import SelfiSegmentation from "./pages/SelfiSegmentation";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/machinelearning" element={<MachineLearning />} />
        <Route path="/voicecontrolsystem" element={<VoiceAssistant />} />
        <Route path="/pitchdetection" element={<PitchDetection />} />
        <Route path="/eventdetection" element={<EventDetection />} />
        <Route path="/imagecapture" element={<ImageCapture />} />
        <Route path="/objectdetection" element={<ObjectDetection />} />
        <Route path="/facedetection" element={<FaceDetection />} />
        <Route path="/selfeisegmentation" element={<SelfiSegmentation />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
