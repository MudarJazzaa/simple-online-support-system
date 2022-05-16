import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Fragment } from "react";

// @mui material components
import CssBaseline from "@mui/material/CssBaseline";

import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Container sx={{ mt: 6 }}>{/* <Outlet /> */}</Container>
    </Fragment>
  );
}

export default App;
