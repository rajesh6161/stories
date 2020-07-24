import React from "react";
import "./App.css";
import Contact from "./components/Contact";
import MainPage from "./components/MainPage";
import RouterPage from "./Routes/RouterPage";

function App() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-1">
        <RouterPage />
      </div>
    </div>
  );
}

export default App;
