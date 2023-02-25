import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import { BrowserRouter, useSearchParams } from "react-router-dom";
import { WalletSelectorContextProvider } from "./contexts/WalletSelectorContext";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<WalletSelectorContextProvider>
				<App />
			</WalletSelectorContextProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
