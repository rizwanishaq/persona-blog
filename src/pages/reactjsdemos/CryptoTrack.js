import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import CryptoCard from "../../components/crypto/CryptoCard";

const CryptoTrack = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { isLoading, error, data } = useQuery("cryptodata", async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const responseData = await response.json();
    setSearchResults(responseData);

    return responseData;
  });

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(data);

    const resultsArray = data.filter((coin) =>
      coin.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(resultsArray);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container className="mt-4 text-center">
      <Form onSubmit={(e) => e.preventDefault()} className="mt-2 mb-3">
        <InputGroup>
          <Form.Control
            type="search"
            placeholder="search coin"
            onChange={handleSearchChange}
          />
        </InputGroup>
      </Form>

      {searchResults.map((coin) => (
        <CryptoCard key={coin.name} coin={coin} />
      ))}
    </Container>
  );
};

export default CryptoTrack;
