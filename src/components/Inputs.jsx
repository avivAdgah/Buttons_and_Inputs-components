import React from "react";
import "./styles/inputs.css";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputAdornment, TextField } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockIcon from '@mui/icons-material/Lock';

export default function Inputs() {
  const inputSx = {
    borderRadius: "6px",
    "&:hover": {
      borderColor: "blue",
      border: "2px solid",
    },
  };

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
        main: "grey",
      },
      secondary: {
        main: "#455A64",
      },
      black: {
        color: "#000",
      },
      hover: {
        "&:hover": {
          color: "#43242",
        },
      },
    },
  });
  return (
    <div style={{ paddingTop: "10px",paddingLeft:'10px' }}>
      <ThemeProvider theme={theme}>
        <div className="first-section" style={{ marginBottom: "8px" }}>
          <TextField label="label" color="default" placeholder="placeholder" />{" "}
          <TextField
            label="label"
            color="black"
            placeholder="placeholder"
            sx={inputSx}
          />{" "}
          <TextField label="label" placeholder="placeholder" focused />{" "}
        </div>
        <div className="second-section" style={{ marginBottom: "8px" }}>
          <TextField error label="label" placeholder="placeholder" />{" "}
          <TextField
            label="label"
            color="black"
            placeholder="placeholder"
            sx={inputSx}
          />{" "}
          <TextField error label="label" placeholder="placeholder" focused />{" "}
        </div>
        <div className="thrid-section" style={{ marginBottom: "8px" }}>
          <TextField label="placeholder" variant="filled" disabled />{" "}
        </div>
        <div className="forth-section" style={{ marginBottom: "8px" }}>
          <TextField
            label="Label"
            placeholder="placeholder"
            helperText="Some important text"
          />{" "}
          <TextField
            error
            label="Label"
            placeholder="placeholder"
            helperText="Some important text"
          />
        </div>
        <div className="forth-section" style={{ marginBottom: "8px" }}>
        <TextField
          label="Label"
          placeholder="placeholder"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><LocalPhoneIcon/></InputAdornment>,
          }}
        />{' '}
        <TextField
          label="Label"
          placeholder="placeholder"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            endAdornment: <InputAdornment position="start"><LockIcon/></InputAdornment>,
          }}
        />
        </div>
        <div className="forth-section" style={{ marginBottom: "8px" }}>
          <TextField label="label" value='Text' />{" "}
        </div>
        <div className="fifth-section" style={{ marginBottom: "8px" }}>
          <TextField label="label" placeholder="placeholder" size="small" />{" "}
          <TextField label="label" placeholder="placeholder" />
        </div>
        <div className="sixth-section" style={{ marginBottom: "8px" }}>
          <TextField fullWidth label="Label" value='text'/>
        </div>
        <div className="seventh-section" style={{ marginBottom: "8px" }}>
          <TextField multiline rows='4' label="Label" placeholder='placeholder'/>
        </div>
      </ThemeProvider>
      <nav>
        <Link to="/">Go to home</Link>
      </nav>
    </div>
  );
}
