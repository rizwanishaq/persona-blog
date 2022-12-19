import { useState, useEffect } from "react";
import { csv, timeParse } from "d3";

export const useGetData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const csvData = await csv(
        "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv"
      );
      setData(csvData);
    };
    getData();
  }, []);
  return data;
};
