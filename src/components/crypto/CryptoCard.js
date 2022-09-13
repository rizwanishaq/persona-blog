import React from "react";
import Card from "react-bootstrap/Card";

const CryptoCard = ({ coin }) => {
  return (
    <Card className="text-center mt-2 mb-2">
      <Card.Header>
        <div className="me-auto">
          <img
            src={coin.image}
            alt="crypto"
            height="30px"
            width="30px"
            margin-right="10px"
          />
          <span>{coin.name}</span>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <p>{coin.current_price} €</p>
        </Card.Title>
        <Card.Text>
          {coin.price_change_percentage_24h < 0 ? (
            <p style={{ color: "red" }}>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          ) : (
            <p style={{ color: "green" }}>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        Market Cap: {coin.market_cap.toLocaleString()} €
      </Card.Footer>
    </Card>
  );
};

export default CryptoCard;
