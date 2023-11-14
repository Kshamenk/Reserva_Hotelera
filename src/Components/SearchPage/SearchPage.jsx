import { Chip, Slider, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import mockData, { chips } from '../../mockData/mockData'
import React from 'react'
import { HighlightOffTwoTone } from '@mui/icons-material'
import Results from '../Results/Results'

const SearchPage = () => {
  const classes = useStyle()
  return (
    <div className={classes.root} >
      <Typography variant='h5' gutterBottom>
        Available rooms
      </Typography>
      <div className={classes.chips} >
        {
          chips.map(({ key, label }) => {
            let icon = <HighlightOffTwoTone />
            return (
              <Chip label={label}
                key={key}
                icon={icon}
                className={classes.chip} />
            )
          })
        }
      </div>
      <div className={classes.selector}>
        <Typography gutterBottom>Prices</Typography>
        <Slider
          /*value={value} 
          onChange={handleChange}*/
          aria-labelledby='continuous-slider'
          min={100}
          max={400}
          valueLabelDisplay='auto'
          color='secondary' />
      </div>
      {mockData
      .filter((data)=> data.cat === "room")
      .map(({ src, title, description, price, stock }, index) => (
        <Results title={title}
          key={index}
          src={src}
          description={description}
          price={price}
          stock={stock} />
      ))}


    </div>
  )
}

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "60px",
  },
  chips: {
    padding: "8px",
  },
  chip: {
    margin: "8px",
  },
  selector: {
    width: "400px",
    marginLeft: "24px",
  },
}))
export default SearchPage