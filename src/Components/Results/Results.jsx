import { Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import accounting from 'accounting';
import React from 'react'

const Results = ({src, title, description, price, stock}) => {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <div className={classes.left}>
        <img src={src} className={classes.image} alt={title}/>
      </div>
      <div className={classes.right}>
        <Typography variant='h6'>{title}</Typography>
        <Typography variant='body1'>{description}</Typography>
        <Typography variant='body1'>Price per night {"  "} <span className={classes.number} >{ accounting.formatMoney(price)}</span></Typography>
        <Typography variant='body1'> Rooms available <span className={classes.number}>{stock}</span></Typography>
      </div>
    </Paper>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '16px'
  },
  left: {
    margin: '16px 40px 40px 40px',
  },
  image: {
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '10px',
    objectFit: "cover"
  },
  number: { 
    fontWeight: '1000',
    marginLeft: "16px",
    fontSize: '1.1rem',
  },
  
}));

export default Results
