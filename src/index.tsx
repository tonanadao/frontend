import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Gstyles from "./gstyles";
import "antd/dist/antd.css";

ReactDOM.render(
	<React.StrictMode>
		<App />
		<Gstyles />
	</React.StrictMode>,
	document.getElementById("root")
);
