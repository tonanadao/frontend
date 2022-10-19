import { useEffect, useState, useCallback } from "react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Gstyles from "./styles/gstyles";
import "antd/dist/antd.css";
import { BrowserRouter as Router, useSearchParams } from "react-router-dom";
import Social from "./components/Social";
import Header from "./components/Header";
// import Particles from "react-particles";
// import type { Container, Engine } from "tsparticles-engine";
// import { loadFull } from "tsparticles";

const Containera = () => {
	// const particlesInit = useCallback(async (engine: Engine) => {
	// 	console.log(engine);

	// 	// you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
	// 	// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
	// 	// starting from v2 you can add only the features you need reducing the bundle size
	// 	await loadFull(engine);
	// }, []);

	// const particlesLoaded = useCallback(
	// 	async (container: Container | undefined) => {
	// 		await console.log(container);
	// 	},
	// 	[]
	// );

	return (
		<>
			<Header />
			<App />
			<Social />
			<div className="version">v1.0.81 (alpha)</div>
			{/* <Particles
				id="tsparticles"
				url="http://foo.bar/particles.json"
				init={particlesInit}
				loaded={particlesLoaded}
			/> */}
			<Gstyles />
		</>
	);
};
ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Containera />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
