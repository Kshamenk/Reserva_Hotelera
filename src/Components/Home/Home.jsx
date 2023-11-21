import { CssBaseline, Grid, createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import React, { useState } from "react";
import Banner from "../Banner/Banner";
import RoomCard from "../RoomCard/RoomCard";
import DatePicker from "../DatePicker/DatePicker";
import { ThemeProvider } from "@emotion/react";
import mockData from "../../mockData/mockData";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "8px",
    maxWidth: "2540px",
    alignSelf: "center",
  },
  dates: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#aaa",
    marginTop: "56px",
    "& button": {
      border: "1px solid #ccc",
      backgroundColor: "#fff",
      color: "rgba(255,103,31,0.4)",
      textTransform: "inherit",
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    "& button:hover": {
      backgroundColor: "rgba(255,103,31,0.4)",
      color: "#fff",
    },
  },
}));

const Home = () => {
  const theme = createTheme();
  const classes = useStyle();
  const [showDates, setShowDates] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.dates}>
          <Button onClick={() => setShowDates(!showDates)}>
            {showDates ? "hide" : "Search dates!"}
          </Button>
        </div>
        {showDates && <DatePicker />}
        <Banner />
        <Grid container className={classes.section} spacing={3}>
          {mockData.map(({ src, title, description }, index) => (
            <Grid item sm={6} md={4} lg={3} key={index}>
              <RoomCard src={src} title={title} description={description} />
            </Grid>
          ))}
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Home;
