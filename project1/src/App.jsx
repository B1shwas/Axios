import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CardProvider } from "./context/Cardcontext";
import Card from "./components/Card/Card";
import CardDescription from "./components/CardDescription/CardDescription";
import "./App.css";
import TopNav from "./components/TopNav/TopNav";

const App = () => {
  return (
    <CardProvider>
      <TopNav />
        <Router>
          <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/description/:title" element={<CardDescription />} />
          </Routes>
        </Router>
    </CardProvider>
  );
};

export default App;
