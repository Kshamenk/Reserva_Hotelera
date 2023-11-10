import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import logo from "../../Img/cutteventslogo.png";
import { makeStyles } from "@mui/styles";
import {
  Avatar,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  Typography,
  createTheme,
} from "@mui/material";
import  Toolbar  from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    backgroundColor: "#fff",
    zIndex: 99,
    width: "100vw",
    outline: "none",
    color: 'inherit',
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: 'inherit'
  },
  logo: {
    height: "30px",
    objectFit: "contain",
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid lightgray",
    minWidth: "300px",
    borderRadius: "999px",
    padding: "8px 1px 8px 1px",
    margin: "1px 10px 1px 10px",
  },

  input: {
    fontSize: "1.2rem",
    padding: "1px px 1px 5px",
    marginLeft: "30px",
    
  },
  right: {
    color: "#333",
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
  },
  avatar: {
    marginLeft: "10px",
  },
}));

const Header = () => {
  const [tablet, setTablet] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false)

  const theme = createTheme();
  const classes = useStyle();

  useEffect(()=>{ 
    const responsivness = ()=> setTablet(window.innerWidth < 900)
    responsivness()
    window.addEventListener('resize',()=>responsivness())
  },[tablet])

  const displayTablet = () => {
      const handleDrawerOpen = ()=> {
        setDrawerOpen(true)
      }
      const handleDrawerClose = ()=>{
        setDrawerOpen(false)
      }
      const headersData = ['My account', 'Previous bookings', 'Log out']

      const getDrawerChoices = ()=>{
        return headersData.map((data, index)=> {
          return(
            <List key={index}>
              <ListItem>{data}</ListItem>
            </List>
          )
        })
      }


    return (
      <Toolbar  className={classes.toolbar}>
      <IconButton
        {...{
          edge: "start",
          color: "#ccc",
          "aria-label": "menu",
          "aria-haspopup": "true",
          onClick: handleDrawerOpen,
        }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer {...{
        anchor: 'left',
        open: drawerOpen,
        onClose: handleDrawerClose,
      }}>
        <div>{getDrawerChoices()}</div>
      </Drawer>
      <Link to='/'>
      <img  src={logo} className={classes.logo} alt="logo"/>
      </Link>
      <div className={classes.right}>
          <Typography>Sign in</Typography>
          <Avatar className={classes.avatar} />
        </div>
    </Toolbar>
    )
  }
  
   

  const displayDesktop = () => (
    <ThemeProvider out theme={theme}>
      <Toolbar  className={classes.toolbar}>
        <Link to='/'>
        <img src={logo} className={classes.logo} alt="logo" />
        </Link>
        <div className={classes.center}>
          <InputBase
            fullWidth
            placeholder="Search here ..."
            className={classes.input}
          />
          <SearchIcon />
        </div>
        <div className={classes.right}>
          <Typography>Sign in</Typography>
          <Avatar className={classes.avatar} />
        </div>
      </Toolbar>
    </ThemeProvider>
  );
  return (
    
        <AppBar  color="inherit"  className={classes.root} >
      {tablet ? displayTablet() : displayDesktop()}
    </AppBar>
    
    
  );
};



export default Header;
