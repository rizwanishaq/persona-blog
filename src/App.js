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
import GrpcSeriesPart1 from "./pages/blogs/GrpcSeriesPart1";
import CryptoTrack from "./pages/reactjsdemos/CryptoTrack";
import ReactTable from "./pages/reactjsdemos/ReactTable";
import UseQueryExample from "./pages/reactjsdemos/UseQueryExample";
import WhisperASR from "./pages/blogs/WhisperASR";
import AudioSpectrum from "./pages/reactjsdemos/AudioSpectrum";
import ReactHookForm from "./pages/reactjsdemos/ReactHookForm";
import ContactUs from "./pages/ContactUs";
import D3Firebase from "./pages/d3example/D3Firebase";
import DonutD3 from "./pages/d3example/DonutD3";
import AreaD3 from "./pages/d3example/AreaD3";
import BoxPlot from "./pages/d3example/BoxPlot";
import CountryInformation from "./pages/reactjsdemos/CountryInformation";
import ToolTips from "./pages/d3example/ToolTips";
import ShoppingCart from "./pages/reactjsdemos/ShoppingCart";
import OpenAIImage from "./pages/machinelearning/OpenAIImage";

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
        <Route path="/grpc1" element={<GrpcSeriesPart1 />} />
        <Route path="/cryptotrack" element={<CryptoTrack />} />
        <Route path="/reacttable" element={<ReactTable />} />
        <Route path="/useQueryexample" element={<UseQueryExample />} />
        <Route path="/whisperasr" element={<WhisperASR />} />
        <Route path="/audiospectrum" element={<AudioSpectrum />} />
        <Route path="/reacthookform" element={<ReactHookForm />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/d3experimentation" element={<D3Firebase />} />
        <Route path="/donutchart" element={<DonutD3 />} />
        <Route path="/aread3" element={<AreaD3 />} />
        <Route path="/boxplotd3" element={<BoxPlot />} />
        <Route path="/countries" element={<CountryInformation />} />
        <Route path="/templatetooltips" element={<ToolTips />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/openaiimage" element={<OpenAIImage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
