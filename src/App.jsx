import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextInput from "./components/TextInput";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0d1b2a";
      document.body.style.color = "white";
      showAlert(" Dark Mode Has Been Enable ", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert(" Light Mode Has Been Enabled ", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextInput showAlert={showAlert} mode={mode} />} ></Route>
          <Route exact path="/about"  element={<About mode={mode} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
