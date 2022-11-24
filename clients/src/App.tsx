import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Topbar from "./Components/Topbar/Topbar";
import Index from "./Pages/Index";
import Stream from "./Pages/Stream";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Index />} />
        </Route>
        <Route path="/:id" element={<Stream />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
