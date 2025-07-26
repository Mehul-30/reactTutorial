import React from "react"
import ReactDOM from "react-dom/client"


const header = React.createElement("h1",{},"Hello world from JavaScript!");

const headerFetch = ReactDOM.createRoot(document.getElementById("root"));

headerFetch.render(header);