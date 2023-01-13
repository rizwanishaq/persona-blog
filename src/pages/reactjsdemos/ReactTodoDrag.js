import React, { useState, useMemo } from "react";
import { useQuery } from "react-query";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import DataTable, { createTheme } from "react-data-table-component";
import Button from "react-bootstrap/Button";

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      X
    </ClearButton>
  </>
);

const ReactTodoDrag = () => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const { isLoading, error, data } = useQuery("todolist", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return await response.json();
  });

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const columns = [
    {
      name: "userId",
      selector: (row) => row.userId,
    },
    {
      name: "id",
      selector: (row) => row.id,
    },
    {
      name: "title",
      selector: (row) => row.title,
    },
    {
      name: "completed",
      selector: (row) => String(row.completed),
    },
  ];

  return (
    <Container className="mt-2 text-center">
      <DataTable
        title="Data"
        columns={columns}
        data={data}
        progressPending={isLoading}
        pagination
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        selectableRows
        persistTableHead
      />
    </Container>
  );
};

export default ReactTodoDrag;
