import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Ref: https://www.pakainfo.com/get-location-name-from-latitude-and-longitude-javascript/
// Ref: https://fcc-weather-api.glitch.me/

export const LocationContext = createContext();

const LocationContextProvider = ({ children }) => {
  const baseURL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
  const weatherUrl = "https://fcc-weather-api.glitch.me/api/current?";

  const [location, setLocation] = useState({
    city: "",
    country: "",
    error: "",
    latitude: "",
    longitude: "",
    status: "",
    temperature: {},
    weather: {},
  });

  const success = async (position) => {
    const response = await axios.get(
      `${baseURL}?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
    );

    const weatherResponse = await axios.get(
      `${weatherUrl}lat=${position.coords.latitude}&lon=${position.coords.longitude}`
    );

    const { main, weather } = weatherResponse.data;

    const { city, countryName } = await response.data;
    setLocation({
      city,
      country: countryName,
      error: "",
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      status: "success",
      temperature: main,
      weather: weather.length > 0 ? weather[0] : {},
    });
  };

  const error = (err) => {
    setLocation({
      city: "",
      locality: "",
      country: "",
      error: err,
      latitude: "",
      longitude: "",
      status: "failure",
    });
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({
        ...location,
        status: "Geolocation is not supported by your browser",
      });
    } else {
      navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      });
    }
  }, []);

  return (
    <LocationContext.Provider value={{ location }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
