import { useState, useEffect } from "react";

// eslint-disable-next-line
export default (query, serverSideValue = false) => {
	if (typeof window === "undefined") {
		return serverSideValue;
	}

	const media = window.matchMedia(query);
	const [matches, setMatches] = useState(serverSideValue);

	useEffect(() => {
		setMatches(media.matches);

		const handler = () => {
			setMatches(media.matches);
		};

		media.addListener(handler);

		return () => {
			media.removeListener(handler);
		};
	}, [media]);

	return matches;
};
