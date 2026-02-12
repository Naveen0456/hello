import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MessageScreen from "./MessageScreen";
import ValentineScreen from "./ValentineScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MessageScreen />} />
        <Route path="/valentine" element={<ValentineScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
