import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#F5FFFA",
        color: "white",
        width: "40vw",
        margin: "2% auto",
        display: "flex",
        flexDirection: "column",
        borderRadius: "7px",
      }}>
      <Toolbar variant="dense" style={{ margin: "0 auto" }}>
        <Link to="/">
          <IconButton
            // style={{ border: "1px black solid" }}
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              color: "black",
              backgroundColor: "white",
              borderColor: "green",
            }}>
            Contacts
          </IconButton>
        </Link>
        <Link to="/add">
          <IconButton
            edge="end"
            color="primary"
            sx={{
              color: "black",
              backgroundColor: "white",
              borderColor: "green",
            }}>
            Add New
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
