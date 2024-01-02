import { Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import backgroundImage from '../../Img/alexander-kaunas.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      <div className={classes.info}>
      <Typography variant='h2' >Plan your getaway ...</Typography>
      <Link to='/search'>
      <Button  variant='contained'>Check our rooms</Button>
      </Link>
      </div>
    </div>
  )
}

const useStyle = makeStyles((theme)=>({
  root:{
      height: '40vh',
      position: 'relative',
      backgroundImage: `url('${backgroundImage}')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      
  },
  info:{
    backgroundColor:'#000',
    color: '#fff',
    width: '350px',
   padding: "10px 0px 20px 10px",
    borderRadius: '4px',
    position: 'absolute',
    '& button': {
      marginTop: "20px",
      color: "#fff",
      backgroundColor: "rgba(255,103,31)",
      textTransform: "inherit",
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    "& button:hover": {
        backgroundColor: "#fff",
        color: "rgba(255,103,31)",
    },
  },
}))

export default Banner