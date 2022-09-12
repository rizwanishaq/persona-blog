import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import Coin from "../../components/crypto/Coin";

const CryptoTrack = () => {
  const [search, setSearch] = useState("");
  const { isLoading, error, data } = useQuery("cryptodata", async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const responseData = await response.json();

    return responseData;
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      {data.map((coin) => (
        <Coin key={coin.name} coin={coin} />
      ))}
    </Container>
  );
};

export default CryptoTrack;
