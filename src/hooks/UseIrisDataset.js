import { useState, useEffect } from "react";
import { csv, timeParse } from "d3";

export const UseIrisDataset = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const csvData = await csv(
        "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/iris.csv"
      );
      setData(csvData);
    };
    getData();
  }, []);
  return data;
};
