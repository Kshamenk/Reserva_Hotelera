import React from "react";


import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import SearchPage from "./Components/SearchPage/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/"  element={ <Home />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
