import React from 'react'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range'
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles((theme) => ({
  root: {
      position: 'absolute',
      top: '13vh',
      left:'30vw',
      [theme.breakpoints] : {
          top: '16vh',
          left:0,  
      }
  },
}));


const selectionRange = {
    startDate : new Date(2023,11,8),
    endDate: new Date(2023,11,8),
    key: 'selection',
}


const DatePicker = () => {
    const classes = useStyle()
    const handleSelect = ()=>{}
  return (
    <div className={classes.root}>
        <DateRangePicker  
        ranges={[selectionRange]} 
        onChange={handleSelect}/>
    </div>
  )
}



export default DatePicker