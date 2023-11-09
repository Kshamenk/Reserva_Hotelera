import React, { useEffect, useState } from 'react'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range' 
import { makeStyles } from '@mui/styles'
import { ThemeProvider } from '@emotion/react'
import { Button, CssBaseline, InputBase, Typography, createTheme } from '@mui/material'
import { People } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const theme = createTheme()

const useStyle = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '13vh',
    left: '30vw',
    zIndex: '50',
  },
  tabletRoot: {
    
    top: '16vh',
    left: 0,// a ajustar
  },
  inputSection:{
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    textDecoration: "none",
    
    "& h5": {
      textAlign: "center"
    },
    "& button": {
      color: "#333",
    },
    "& button:hover": {
      backgroundColor: "rgba(255,103,31,0.4)",
      color: "#fff",
    },
  },
  people:{
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
  },
  input:{
    width:"6vw",
    border: '1px solid #ccc',
    margin: '0px 2px 2px 0px',
    padding: '7px 8px',
    fontSize: '.9rem',
    lineHeight: '1.6',
  }

}));



const selectionRange = {
  startDate: new Date(2023, 11, 8),
  endDate: new Date(2023, 11, 8),
  key: 'selection',
}


const DatePicker = () => {
  const [isTabletScreen, setIsTabletScreen] = useState(false);
  const classes = useStyle()
  const handleSelect = () => { } 

  const handleResize = () => {
    const isTablet = window.innerWidth <= 899; // Ajusta el valor según tus necesidades
    setIsTabletScreen(isTablet);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Limpieza del event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={` ${isTabletScreen ? classes.tabletRoot : classes.root}`}>
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <div className={classes.inputSection}>
          <Typography variant='h5'>Number of guests</Typography>
          <div className={classes.people}>
            <InputBase placeholder='2pax'
            inputProps={{className: classes.input}} />
            <People/>
          </div>
          <Link className={classes.inputSection} to="/search">
           <Button> Search rooms</Button>
            </Link> 
        </div>
        
      </div>
    </ThemeProvider>

  )
}



export default DatePicker
