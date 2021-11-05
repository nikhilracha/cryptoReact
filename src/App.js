import { Grid, Box } from "@mui/material";
import Etherium from "./components/Etherium";
import Bitcoin from "./components/Bitcoin";
import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = React.useState({});

  const getBTCPrices = () => {
    axios.get("https://d11h2.sse.codesandbox.io/api/BTC").then((response) => {
      console.log(response.data.data);
      const res = response.data.data;
      setData(res);
    });
  };

  useEffect(() => getBTCPrices(), []);

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1, alignContent: "center" }}>
        <Grid container spacing={2}>
          <Grid item xs md={6}>
            <Bitcoin data={data} />
          </Grid>
          <Grid item xs md={6}>
            <Etherium />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default App;
