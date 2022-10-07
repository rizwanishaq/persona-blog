import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import CountryCard from "../../components/Countries/CountryCard";
import CountrySelect from "../../components/Countries/CountrySelect";

const CountryInformation = () => {
  const [country, setCountry] = useState({});
  const { isLoading, error, data } = useQuery("countriesapi", () =>
    fetch("https://restcountries.com/v3.1/all").then((res) => res.json())
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Container>
      <CountrySelect setCountry={setCountry} data={data} />
      {<CountryCard country={country} />}
    </Container>
  );
};

export default CountryInformation;
