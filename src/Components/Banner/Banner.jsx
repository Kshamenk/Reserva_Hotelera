import { Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import backgroundImage from '../../Img/alexander-kaunas.jpg'
import React from 'react'


function Banner() {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      <div className={classes.info}>
      <Typography variant='h2' >Plan your getaway ...</Typography>
      <Button color='inherit' variant='contained'>Check our rooms</Button>
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
      marginTop: '68px'
  },
  info:{
    backgroundColor:'#000',
    color: '#fff',
    width: '350px',
   padding: "10px 0px 20px 20px",
    borderRadius: '4px',
    position: 'absolute',
    '& button': {
      marginTop: "30px",
    },
  },
}))

export default Banner