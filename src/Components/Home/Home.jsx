import {  CssBaseline, createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {Button} from "@mui/material"
import React, { useState } from 'react'
import Banner from '../Banner/Banner';
import RoomCard from '../RoomCard/RoomCard';
import DatePicker from '../DatePicker/DatePicker';
import { ThemeProvider } from '@emotion/react';

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  dates:{
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "#aaa",
    marginTop: "65px",
    '& button' : {
      border: '1px solid #ccc',
      backgroundColor: '#fff',
      color: "rgba(255,103,31,0.4)",
      textTransform: 'inherit',
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    '& button:hover': {
      backgroundColor: "rgba(255,103,31,0.4)",
      color: '#fff',
    }
  },
  
}));


const Home = () => {
  const theme = createTheme()
  const classes = useStyle()
  const [showDates, setShowDates] = useState(false)

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <div className={classes.root}>
      <div className={classes.dates}>
        <Button onClick={()=>setShowDates(!showDates)}>
          {showDates ? "hide" : "Search dates!"}
        </Button>
      </div>
      { showDates && <DatePicker/> }
      <Banner/>
      <div className={classes.section}>
        {/* <RoomCard src={} title={} description={}/>
        <RoomCard src={} title={} description={}/>
        <RoomCard src={} title={} description={}/>
        <RoomCard src={} title={} description={}/> */}
      </div>
    </div>
    </ThemeProvider>
  
  )
}




export default Home