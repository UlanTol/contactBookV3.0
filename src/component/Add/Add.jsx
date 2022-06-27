import React, { useContext, useState } from "react";
import { contactContext } from "../../context/contactContext";
import { Box, TextField, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Add = () => {
  const [inpValueName, setInpValueName] = useState("");
  const [inpValuePhone, setInpValuePhone] = useState("");
  const [open, setOpen] = React.useState(false);

  const { addContact } = useContext(contactContext);

  const navigate = useNavigate();

  function handleToList() {
    navigate("/");
  }

  function handleSave() {
    if (!inpValueName || !inpValuePhone) {
      alert("Fill the blanks");
    } else {
      let newObj = {
        name: inpValueName,
        phone: inpValuePhone,
      };
      setOpen(true);
      addContact(newObj);
      setInpValueName("");
      setInpValuePhone("");
      // navigate("/");
    }
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <TextField
        style={{ width: "500px" }}
        id="standard-basic"
        label="Name"
        variant="standard"
        value={inpValueName}
        onChange={e => setInpValueName(e.target.value)}
      />
      <TextField
        type="number"
        style={{ width: "500px", textDecoration: "none" }}
        id="standard-basic"
        label="Phone"
        variant="standard"
        value={inpValuePhone}
        onChange={e => setInpValuePhone(e.target.value)}
      />
      <Button
        onClick={handleSave}
        style={{
          borderRadius: "8px",
          backgroundColor: "#F5FFFA",
          color: "#6495ED",
          marginTop: "50px",
        }}
        variant="contained">
        Add
      </Button>

      <Button onClick={handleToList}>Back</Button>
      <Stack direction="row" spacing={2}></Stack>

      <Stack spacing={5} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <MuiAlert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}>
            Contact successfully added!
          </MuiAlert>
        </Snackbar>
      </Stack>
    </Box>
  );
};

export default Add;
