
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
        <Tooltip children = "Hover over me"  text = "This is a tooltip" />
        <Tooltip children = "Hover over me to see another tooltip" text = "This is another tooltip" />
    </div>
  )
}

export default App
