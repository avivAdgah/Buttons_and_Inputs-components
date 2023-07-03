import React from "react";
import { Link } from "react-router-dom";
import "./styles/buttons.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
// import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import {AddShoppingCartIcon} from '@mui/material'



export default function Buttons() {
  const theme = createTheme({
    status: {
      main: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#0971f1",
        darker: "#053e85",
      },
      default: {
        main: "#E0E0E0",
      },
      secondary:{
        main:'#455A64'
      }
    },
  });

  return (
    <div style={{ height: "100%" }}>
      <ThemeProvider theme={theme}>
        <div className="first-section" style={{ marginBottom: "8px" }}>
          <Button color="default" variant="contained">
            Default
          </Button>{" "}
          <Button
            className="button-default"
            color="default"
            variant="contained"
          >
            Default
          </Button>
        </div>
        <div className="second-section" style={{ marginBottom: "8px" }}>
          <Button color="primary" variant="outlined">
            Default
          </Button>{" "}
          <Button
            className="primary-outlined"
            color="primary"
            variant="outlined"
          >
            Default
          </Button>
        </div>
        <div className="thrid-section" style={{ marginBottom: "8px" }}>
          <Button color="primary" variant="text">
            Default
          </Button>
          <Button className="primary-text" color="primary" variant="text">
            Default
          </Button>
        </div>
        <div className="forth-section" style={{ marginBottom: "8px" }}>
          <Button variant="contained" disableElevation>
            Disable elevation
          </Button>
        </div>
        <div className="fifth-section" style={{ marginBottom: "8px" }}>
          <Button variant="contained" disabled>
            Disabled
          </Button>{' '}
          <Button variant="text" disabled>
            Disabled
          </Button>
        </div>
        <div className="sixth-section" style={{ marginBottom: "8px" }}>
        <Button variant="contained" startIcon={<AddShoppingCartIcon/>}>
          Delete
        </Button>{' '}
        <Button variant="contained" endIcon={<AddShoppingCartIcon/>}>
          Delete
        </Button>
        </div>
        <div className="seven-section" style={{ marginBottom: "8px" }}>
          <Button variant="contained" size="small">
            Small
          </Button>{' '}
          <Button variant="contained" size="medium">
            Medium
          </Button>{' '}
          <Button variant="contained" size="large">
            Large
          </Button>
        </div>
        <div className="eighth-section" style={{ marginBottom: "8px" }} >
          <Button color="default" variant="contained">
            Default
          </Button>{' '}
          <Button color="primary" variant="contained">
            Default
          </Button>{' '}
          <Button color="secondary" variant="contained">
            Secondary
          </Button>{' '}
          <Button color="error" variant="contained">
            Danger
          </Button>
        </div>
        <div className="ninth-section" style={{ marginBottom: "8px" }}>
          <Button className="button-default" color="default" variant="contained" >
            Default
          </Button>{' '}
          <Button className="primary-contained" color="primary" variant="contained" >
            Default
          </Button>{' '}
          <Button className="secondary-contained" color="secondary" variant="contained" >
            Secondary
          </Button>{' '}
          <Button className="error-contained" color="error" variant="contained">
            Danger
          </Button>
        </div>

      </ThemeProvider>
      <nav style={{marginTop:'4em'}}>
        <Link to="/">
          Go to home
        </Link>
      </nav>
    </div>
  );
}
