import React from "react";
import Feature from "../components/sections/Feature";
import Main from "../components/sections/Main";
import { DeviceUUID } from "device-uuid";

const Home = () => {
  // How to get the unique device identifier
  // const uuid = new DeviceUUID().get();
  // const deviceInformation = new DeviceUUID().parse();
  // console.log(deviceInformation);

  // console.log(deviceInformation.geoIp.toString());
  console.log(process.env.REACT_APP_HUGGING_FACE_API);

  return (
    <>
      <Main />
      <Feature />
    </>
  );
};

export default Home;

// 2750bc42-702e-4cbe-bae5-798f171389e1
