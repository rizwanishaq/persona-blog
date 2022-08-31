import React from "react";
import Form from "react-bootstrap/Form";

const CountrySelect = ({ countries, setCountry }) => {
  const HandleChange = (e) => {
    const country = countries.find((item) => item.ID === e.target.value);
    setCountry(country);
  };
  return (
    <>
      <Form.Select className="mt-4 text-center" onChange={HandleChange}>
        <option values="0">Select Country</option>
        {countries.map((country) => (
          <option key={country.Country} value={country.ID}>
            {country.Country}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default CountrySelect;
