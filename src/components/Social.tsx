import React, { Component } from "react";
import {
	FaMediumM,
	FaDiscord,
	FaTwitter,
	FaLinkedin,
	FaTelegram,
	FaGithub,
} from "react-icons/fa";

// import { Link } from 'react-router-dom';
// import ScrollspyNav from './scrollSpy';

// import Logo from '../../assets/images/tonana.png';

const Social = () => {
	return (
		<ul className="social-icon social">
			<li className="list-inline-item me-1">
				<a
					href="https://github.com/tonanadao"
					className="icon-hover rounded"
					target="_blank">
					<FaGithub className="fea icon-sm fea-social text-dark" />
				</a>
			</li>

			<li className="list-inline-item me-1">
				<a
					href="https://twitter.com/Tonanadao"
					target="_blank"
					className="icon-hover rounded">
					<FaTwitter className="fea icon-sm fea-social color-main" />
				</a>
			</li>

			<li className="list-inline-item me-1">
				<a
					href="https://www.linkedin.com/company/tonana/"
					target="_blank"
					className="icon-hover rounded">
					<FaLinkedin className="fea icon-sm fea-social color-main" />
				</a>
			</li>
			<li className="list-inline-item me-1">
				<a
					href="https://t.me/tonanadao"
					target="_blank"
					className="icon-hover rounded">
					<FaTelegram className="fea icon-sm fea-social color-main" />
				</a>
			</li>

			<li className="list-inline-item me-1">
				<a
					href="https://discord.gg/wy9x6jF8PC"
					target="_blank"
					className="icon-hover rounded">
					<FaDiscord className="fea icon-sm fea-social text-dark" />
				</a>
			</li>
		</ul>
	);
};

export default Social;
