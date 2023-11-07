import { CssBaseline } from '@mui/material';
import { makeStyles } from '@mui/styles';

import React from 'react'

const Home = () => {
  const classes = useStyles()
  return (<>
    <CssBaseline/>
    <div className={classes.root}>
        <h1>HomePage</h1>
    </div>
    </>
  )
}


const useStyles = makeStyles((theme) => ({
  root: {
  
  },
  
}));

export default Home