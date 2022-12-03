import "./App.scss";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainheader from "./Components/Mainheader";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainheader />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
