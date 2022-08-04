import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Gstyles from "./styles/gstyles";
import "antd/dist/antd.css";
import { BrowserRouter as Router, useSearchParams } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
			<Gstyles />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
