import { CssBaseline } from '@mui/material';
import { makeStyles } from '@mui/styles';

import React from 'react'
import Banner from '../Banner/Banner';
import RoomCard from '../RoomCard/RoomCard';
import DatePicker from '../DatePicker/DatePicker';

const useStyles = makeStyles((theme) => ({
  root: {
  
  }
  
}));


const Home = () => {
  const classes = useStyles()
  return (
  <>
    <CssBaseline/>
    <div className={classes.root}>
      <div className={classes.dates}>
      {/* <DatePicker/> */}
      </div>
      <Banner/>
      <div className={classes.section}>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
      </div>
    </div>
    </>
  )
}




export default Home