import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Resume } from "./pages";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='resume' element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
