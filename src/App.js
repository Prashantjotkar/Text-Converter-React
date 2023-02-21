import "./App.css";
import Nav from "./components/Nav";
import Form from "./components/Form";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };
  const [mode, setMode] = useState("light");
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Nav mode={mode} toggleMode={changeMode} />
        <Alert alert={alert} />

        <div className="container">
          <Routes>
            {/* use exact keyword to avoid partial matching*/ }
            <Route exact path="/about" element={<About/>}></Route>
            <Route
              exact path="/"
              element={
                <Form
                  showAlert={showAlert}
                  name="Enter the text to Modify"
                  mode={mode} />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
