import React from "react";
import "./Coin.css";

const Coin = ({ coin }) => {
  return (
    <tr>
      <td>
        <div className="coin">
          <img src={coin.image} alt="crypto" />
          <h1>{coin.name}</h1>
          <p className="coin-symbol"></p>
        </div>
      </td>
      <td>
        <p className="coin-price">Euros.{coin.current_price}</p>
      </td>
      <td>
        {coin.price_change_percentage_24h < 0 ? (
          <p className="coin-percent red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="coin-percent green">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td>
        <p className="coin-marketcap">
          Mkt Cap: Euros.{coin.market_cap.toLocaleString()}
        </p>
      </td>
    </tr>
  );
};

export default Coin;
