import React from "react";
import { useQuery } from "react-query";
import { Container } from "react-bootstrap";
import DataTable, { createTheme } from "react-data-table-component";

const ReactTable = () => {
  const { isLoading, error, data } = useQuery("tabledata", async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    return await response.json();
  });

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Text",
      selector: (row) => row.body,
    },
  ];

  return (
    <Container>
      <DataTable
        title="Data"
        columns={columns}
        data={data}
        progressPending={isLoading}
        pagination
      />
    </Container>
  );
};

export default ReactTable;
