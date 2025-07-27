import React from "react"
import ReactDOM from "react-dom/client"


const header =  (<h1 id="heading">This is from React-JSX</h1>)

const headerFetch = ReactDOM.createRoot(document.getElementById("root"));

headerFetch.render(header); 