import React, { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@emotion/react";
import {
  Button,
  CssBaseline,
  InputBase,
  Typography,
  createTheme,
} from "@mui/material";
import { People } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { selectStart, setStart } from "../../features/startSlice";
import { selectEnd, setEnd } from "../../features/endSlice";

const theme = createTheme();

const useStyle = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "14vh",
    left: "30vw",
    zIndex: "50",
  },
  tabletRoot: {
    top: "14vh",
    left: "0vw",
    position: "absolute",
    zIndex: "100",
    // a ajustar
  },
  inputSection: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    textDecoration: "none",

    "& h5": {
      textAlign: "center",
    },
    "& button": {
      color: "#333",
    },
    "& button:hover": {
      backgroundColor: "rgba(255,103,31,0.4)",
      color: "#fff",
    },
  },
  people: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "6vw",
    border: "1px solid #ccc",
    margin: "0px 2px 2px 0px",
    padding: "7px 8px",
    fontSize: ".9rem",
    lineHeight: "1.6",
  },
}));

const DatePicker = () => {
  const [isTabletScreen, setIsTabletScreen] = useState(false);
  const classes = useStyle();
  const dispatch = useDispatch();
  const start = useSelector(selectStart);
  const end = useSelector(selectEnd);

  const selectionRange = {
    startDate: start,
    endDate: end,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    dispatch(setStart(ranges.selection.startDate.getTime()));
    dispatch(setEnd(ranges.selection.endDate.getTime()));
  }; //genera este objeto por si solo

  const handleResize = () => {
    const isTablet = window.innerWidth <= 899;
    setIsTabletScreen(isTablet);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Limpieza del event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={` ${isTabletScreen ? classes.tabletRoot : classes.root}`}>
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <div className={classes.inputSection}>
          <Typography variant="h5">Number of guests</Typography>
          <div className={classes.people}>
            <InputBase
              placeholder="2pax"
              inputProps={{ className: classes.input }}
            />
            <People />
          </div>
          <Link className={classes.inputSection} to="/search">
            <Button> Search rooms</Button>
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DatePicker;
