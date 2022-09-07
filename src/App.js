import { Route, Routes } from "react-router-dom";
// import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import MachineLearning from "./pages/MachineLearning";

import VoiceAssistant from "./pages/machinelearning/VoiceAssistant";
import PitchDetection from "./pages/machinelearning/PitchDetection";
import EventDetection from "./pages/machinelearning/EventDetection";
import ImageCapture from "./pages/machinelearning/ImageCapture";
import ObjectDetection from "./pages/machinelearning/ObjectDetection";
import FaceDetection from "./pages/machinelearning/FaceDetection";
import SelfiSegmentation from "./pages/machinelearning/SelfiSegmentation";
import UseWebSocketExample from "./pages/reactjsdemos/UseWebSocketExample";
import VideoFrames from "./pages/reactjsdemos/VideoFrames";
import SearchBar from "./pages/reactjsdemos/SearchBar";
import SimpleFirebase from "./pages/reactjsdemos/SimpleFirebase";
import ImagePreview from "./pages/reactjsdemos/ImagePreview";
import CovidTracker from "./pages/reactjsdemos/CovidTracker";
import ExpenseTracker from "./pages/reactjsdemos/ExpenseTracker";
import UploadImage from "./pages/reactjsdemos/UploadImage";
import ReactJs from "./pages/ReactJs";
import Blogs from "./pages/Blogs";
import MemCached from "./pages/blogs/MemCached";
import SimpleSVG from "./pages/d3example/SimpleSVG";
import ReactSpring from "./pages/reactjsdemos/ReactSpring";
// import TextToxcity from "./pages/machinelearning/TextToxcity";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/machinelearning" element={<MachineLearning />} />
        <Route path="/voicecontrolsystem" element={<VoiceAssistant />} />
        <Route path="/pitchdetection" element={<PitchDetection />} />
        <Route path="/eventdetection" element={<EventDetection />} />
        <Route path="/imagecapture" element={<ImageCapture />} />
        <Route path="/objectdetection" element={<ObjectDetection />} />
        <Route path="/facedetection" element={<FaceDetection />} />
        <Route path="/selfeisegmentation" element={<SelfiSegmentation />} />

        <Route path="/reactjs" element={<ReactJs />} />
        <Route path="/imagepreview" element={<ImagePreview />} />
        <Route path="/expensetracker" element={<ExpenseTracker />} />
        <Route path="/covidtracker" element={<CovidTracker />} />
        <Route path="/firebasetutorial" element={<SimpleFirebase />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/uploadimage" element={<UploadImage />} />

        <Route path="/usewebsocketexample" element={<UseWebSocketExample />} />
        <Route path="/videoframes" element={<VideoFrames />} />
        <Route path="/memcached" element={<MemCached />} />
        <Route path="/d3example" element={<SimpleSVG />} />
        <Route path="/reactspring" element={<ReactSpring />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
