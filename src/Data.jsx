import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { AppContext } from './context/AppContext';
import ReactTable from 'react-table';
import "react-table/react-table.css";

export const Data = (props) => {
  const [state, dispatch] = useContext(AppContext);

  return  (
    <React.Fragment>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Box sx={{ width: '100%' }}>
        <ReactTable
          data={state.data}
          columns={[
            {
              Header: "Symbol",
              accessor: "symbol",
              className: "sticky",
              headerClassName: "sticky"
            },
            {
              Header: "Description",
              accessor: "desc"
            },
            {
              Header: "Underlying Asset",
              accessor: "unAsset"
            },
            {
              Header: "Mark Price",
              accessor: "markPrice"
            }
          ]}
          style={{
            height: "400px", // This will force the table body to overflow and scroll, since there is not enough room
            width: "400px"
          }}
          defaultPageSize={50}
          className="-striped -highlight"
        />
          
        </Box>
      </Container>
    </React.Fragment>
  );
}