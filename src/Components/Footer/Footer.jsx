import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" gutterBottom>
        2023 Copiright by @CUTT/events
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Privacy . Terms . Sitemap
      </Typography>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    borderTop: "1px solid #ccc",
    textAlign: "center",
    fontStyle: "italic",
    background: "lightgray",
    marginTop: "16px",
  },
}));

export default Footer;
