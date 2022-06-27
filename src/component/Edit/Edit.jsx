import { Box, Container, Input, TextField, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { contactContext } from "../../context/contactContext";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getOneContact, updateContact, oneContact } =
    useContext(contactContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    getOneContact(id);
  }, []);

  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setPhone(oneContact.phone);
    }
  }, [oneContact]);

  function handleSave() {
    let editedContact = {
      name,
      phone,
    };
    updateContact(id, editedContact);
    navigate("/");
    console.log(editedContact);
  }
  return (
    <Container>
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
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          style={{ width: "500px" }}
          id="standard-basic"
          label="Phone"
          variant="standard"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <Button
          onClick={handleSave}
          style={{
            borderRadius: "8px",
            backgroundColor: "#F5FFFA",
            color: "#6495ED",
            marginTop: "50px",
            fontSize: "25px",
            width: "150px",
            textDecoration: "none",
          }}
          variant="contained">
          Save
        </Button>
        <Stack direction="row" spacing={2}></Stack>
      </Box>
    </Container>
  );
};

export default Edit;
