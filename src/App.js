import React from "react";

import { Counter } from "./features/counter/Counter";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import SearchPage from "./Components/SearchPage/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/"  element={ <Home />} />
      </Routes>
    </Router>
  );
}

export default App;
