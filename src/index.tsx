import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Gstyles from "./styles/gstyles";
import "antd/dist/antd.css";
import { BrowserRouter as Router, useSearchParams } from "react-router-dom";
import Social from "./components/Social";
import Header from "./components/Header";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Header />
			<App />
			<Social />
			<div className="version">v1.0.84 (alpha)</div>
			<Gstyles />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
