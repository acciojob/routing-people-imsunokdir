import React from "react";
import "./../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userlists from "./Userlists";
import UserDetails from "./UserDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Userlists />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
