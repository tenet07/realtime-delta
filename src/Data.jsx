import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import axios from 'axios';
import socketIOClient from "socket.io-client";

const ENDPOINT = "wss://production-esocket.delta.exchange:8000";

export const Data = (props) => {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{

      try {
        const {data: response} = await axios.get('https://api.delta.exchange/v2/products');
        let data = [].concat.apply([], response.result.map(res => [{ "symbol": res.symbol, "desc": res.description, "unAsset": res.spot_index.config?.underlying_asset, "markPrice": res.strike_price}]))
        setData(data);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const io = socketIOClient(ENDPOINT);
    io.connect()
    io.on("v2/ticker", data => {
      
    });
    
  }, [])

  return  (
    <React.Fragment>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Box sx={{ width: '100%' }}>
        <ReactTable
          data={data}
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
            height: "500px", 
            width: "950px"
          }}
          defaultPageSize={50}
          className="-striped -highlight"
        />
          
        </Box>
      </Container>
    </React.Fragment>
  );
}