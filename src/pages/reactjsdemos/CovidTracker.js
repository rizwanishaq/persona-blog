import React, { useState } from "react";
import Header from "../../components/CovidTracker/Header";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import GlobalData from "../../components/CovidTracker/GlobalData";
import CountrySelect from "../../components/CovidTracker/CountrySelect";

const CovidTracker = () => {
  const { isLoading, error, data } = useQuery("covid19api", () =>
    fetch("https://api.covid19api.com/summary").then((res) => res.json())
  );

  const [country, setCountry] = useState();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <Header />
      {country ? (
        <GlobalData global={country} />
      ) : (
        <GlobalData global={data.Global} />
      )}
      <CountrySelect countries={data.Countries} setCountry={setCountry} />
    </Container>
  );
};

export default CovidTracker;
