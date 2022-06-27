import React, { useContext, useState } from "react";
import Header from "./component/Header/Header";
import ContactContextProvider from "./context/contactContext";
import MainRoutes from "./MainRoutes";
import "./App.css";
import { ReactNavbar } from "overlay-navbar";

const App = () => {
  // contacts.slice(firstContactIndex, lastContactIndex);
  return (
    <ContactContextProvider>
      <ReactNavbar
        link1Margin={"40px"}
        link1Size={"25px"}
        burgerColor={"#F4F5F9"}
        link1Text={"Big"}
        link2Text={"thanks"}
        link3Text={"for"}
        link4Text={"mark"}
        navColor1={"white"}
        logoWidth={"400px"}
        link1Url={"https://github.com/UlanTol?tab=repositories"}
        logo={
          "https://cdn.dribbble.com/users/1612143/screenshots/16128891/media/db89b4ac4eae07e94c4db35a783f1672.jpg?compress=1&resize=400x300"
        }
      />
      <div
        id="app"
        style={{
          width: "45vw",
          margin: "0 auto",
          padding: "30px",
        }}>
        <Header />
        <MainRoutes />
      </div>
    </ContactContextProvider>
  );
};

export default App;
