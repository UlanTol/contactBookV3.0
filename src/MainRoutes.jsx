import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./component/Add/Add";
import Edit from "./component/Edit/Edit";
import SimpleAccordion from "./component/List/List";
import List from "./component/List/List";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SimpleAccordion />} />
      <Route path="/add" element={<Add />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
};

export default MainRoutes;
