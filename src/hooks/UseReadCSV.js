import { useState, useEffect } from "react";
import { csv, timeParse } from "d3";

export const useReadCSV = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const csvData = await csv(
        "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv"
      );
      const data = csvData.map((item) => {
        return { date: timeParse("%Y-%m-%d")(item.date), value: item.value };
      });
      setData(data);
    };
    getData();
  }, []);
  return data;
};
