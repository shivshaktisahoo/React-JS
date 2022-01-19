import React from "react";
import ReactDOM  from "react-dom";
import Student from "./Student";

// Rendering Component
ReactDOM.render(<Student>I am Child {100+1}</Student>, document.getElementById("root"));