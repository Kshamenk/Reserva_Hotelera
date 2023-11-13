// import { ThemeProvider } from '@emotion/react'
// import { Typography, createTheme } from '@mui/material'
// import { makeStyles } from '@mui/styles'
// import React from 'react'

// const useStyle = makeStyles((theme) =>({
//   root: {
//     margin: '20px 0px 0px 25px',
//   },
//   //root2:{ '& h6': { wordWrap: 'break-word' } }

//   imageWrapper:{
//     overflow: 'hidden',
//   },
//   media: {
//     height: '400px',
//     width: '600px',
//     objectFit: 'cover',
//     transform: 'scale(1.1)',
//     transition: '.4s ease-in-out',
//     WebkitTransform: 'scale(1.1)',
//     WebkitTransition: '.4s ease-in-out',
//     '&:hover':{
//       transform: 'scale(1)',
//       WebkitTransform: 'scale(1)',
//     },
    
//   },

// }))

//  const RoomCard = ({src, title, description}) => {
//   const classes = useStyle()
//   const theme = createTheme()
//   return (
//     <ThemeProvider theme={theme} >
//     <div className={classes.root}>
//       <figure className={classes.imageWrapper}>
//         <img  className={classes.media}  src={src} alt={title} />
//       </figure>
//       <Typography variant='h5' color='textPrimary'>{title}</Typography>
//       <Typography variant='h6' color='textSecondary'>{description}</Typography>
//     </div>
//     </ThemeProvider>
//   )
// }


// export default RoomCard;


import { ThemeProvider } from '@mui/material';
import { Typography, createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: '15px 10px 10px 5px',
  },
  root2: {
    margin: '15px 10px 10px 5px',
    '& h6': {
      wordWrap: 'break-word',
    },
  },
  imageWrapper: {
    overflow: 'hidden',
  },
  media: {
    height: '400px',
    width: '600px',
    objectFit: 'cover',
    transform: 'scale(1.1)',
    transition: '.4s ease-in-out',
    WebkitTransform: 'scale(1.1)',
    WebkitTransition: '.4s ease-in-out',
    '&:hover': {
      transform: 'scale(1)',
      WebkitTransform: 'scale(1)',
    },
  },
}));

const RoomCard = ({ src, title, description }) => {
  const classes = useStyles();
  const theme = createTheme();
  const [isTabletScreen, setIsTabletScreen] = useState(false);
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
      <div className={` ${isTabletScreen ? classes.root2 : classes.root}`}>
        <figure className={classes.imageWrapper}>
          <img className={classes.media} src={src} alt={title} />
        </figure>
        <Typography variant="h5" color="textPrimary">
          {title}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {description}
        </Typography>
      </div>
    </ThemeProvider>
  );
};

export default RoomCard;
