import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { contactContext } from "../../context/contactContext";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export default function SimpleAccordion() {
  const navigate = useNavigate();
  const { contacts, getContacts, deleteContact } =
    React.useContext(contactContext);
  React.useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      {contacts.map(item => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Accordion
            style={{
              border: "solid 2px black",
              width: "400px",
              marginTop: "10px",
            }}>
            <AccordionSummary
              style={{ display: "flex", justifyContent: "space-between" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography key={item.id}>{item.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "red" }} key={item.id}>
                {item.phone}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <DeleteOutlineIcon
            onClick={() => deleteContact(item.id)}
            style={{
              marginTop: "10px",
              fontSize: "30px",
            }}>
            Delete
          </DeleteOutlineIcon>
          <EditIcon
            onClick={() => navigate(`/edit/${item.id}`)}
            style={{
              marginTop: "10px",
              fontSize: "26px",
            }}></EditIcon>
        </div>
      ))}
    </div>
  );
}
