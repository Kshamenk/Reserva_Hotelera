import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import logo from "../../Img/cutteventslogo.png";
import { makeStyles } from "@mui/styles";
import { InputBase, createTheme } from "@mui/material";
import { Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider } from "@emotion/react";
const Header = () => {
  
  const [mobile, setMobile] = useState(false);

  const theme = createTheme();
  const displayMobile = () => {};
  const classes = useStyle();
  const displayDesktop = () => (
    <ThemeProvider theme={theme}>
      <Toolbar className={classes.toolbar}>
        <img src={logo} className={classes.logo} alt="logo" />
        <InputBase
          fullWidth
          placeholder="Search here ..."
          inputProps={{ className: classes.input }}
        />
        <SearchIcon />
      </Toolbar>
    </ThemeProvider>
  );
  return <AppBar>{mobile ? displayMobile() : displayDesktop()}</AppBar>;
};

const useStyle = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: "30px",
    objectFit: "contain",
  },
  input: {
    fontSize: "1.2rem",
  },
}));

export default Header;
