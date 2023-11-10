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
  }
  
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
          {showDates ? "hide" : "SearchPage"}
        </Button>
        { showDates && <DatePicker/> }
      
      </div>
      <Banner/>
      <div className={classes.section}>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
      </div>
    </div>
    </ThemeProvider>
  
  )
}




export default Home