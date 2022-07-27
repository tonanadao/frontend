import { createGlobalStyle } from "styled-components";
import Baloo from "../static/Baloo.ttf";

const Gstyles = createGlobalStyle`
	@font-face {
		font-family: "Baloo";
		src: local("Baloo"), url(${Baloo});
	}

	* {
		font-family: "Baloo";
		color: #FFC916 !important;
  }

	body {
		background: #161c2d;
		display: flex;
		justify-content: center;
		background-repeat: no-repeat;
    background-attachment: fixed;
	}

	h1 {
		color:  #FFC916 !important;
		text-align: center;
	}

	h2 {
		color:  #FFC916 !important;
		text-align: center;
	}

	img {
		width: 300px;
		transition: .3s;
		cursor: pointer;
		transform: rotate3d(0, 1, 0, 180deg)
	}

	button {
		background: #FFC916 !important;
		border-radius: 10px !important;
		padding: 16px 24px !important;
		display: flex !important;
		justify-content: center !important;
		align-items: center !important;
		width: 100%;
		* {
			color: #212529 !important;
		}
	}

	input {
		background: #FFC916 !important;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25)!important;
		border-radius: 10px!important;
		width: 100% !important;
		color: black !important;
	}

	.App {
		padding: 120px 0 120px 0;
		max-width: 400px;
	}
	iframe {
		display:none ;
	}
	@keyframes spin {
    from {
			transform:rotate(0deg);
    }
    to {
			transform:rotate(360deg);
    }
	}
`;

export default Gstyles

