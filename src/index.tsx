import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import { BrowserRouter as Router, useSearchParams } from "react-router-dom";
import { WalletSelectorContextProvider } from "./contexts/WalletSelectorContext";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<WalletSelectorContextProvider>
				<App />
			</WalletSelectorContextProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
