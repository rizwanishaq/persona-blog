import React from "react";
import Form from "react-bootstrap/Form";

const CountrySelect = ({ setCountry, data }) => {
  const HandleChange = (e) => {
    if (e.target.value === "0") {
      setCountry({});
    } else {
      const country = data.find((item) => e.target.value === item.name.common);
      setCountry(country);
    }
  };
  return (
    <>
      <Form.Select className="mt-4 text-center" onChange={HandleChange}>
        <option values="0">Select Country</option>
        {data.map((item) => (
          <option key={item.name.common} value={item.name.common}>
            {item.name.common} - {item.flag}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default CountrySelect;
