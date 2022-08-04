import { createGlobalStyle } from "styled-components";
// import Baloo from "../static/Inter-roman.var.woff2";

const Gstyles = createGlobalStyle`
	@font-face {
		font-family: "Baloo";
		src: local("Baloo"), url("../static/Inter-roman.var.woff2");
	}

	* {
		font-family: "Baloo", sans-serif;
    font-weight: 500;
  }

	body {
		background: #1E1E1E;
		display: flex;
		justify-content: center;
		background-repeat: no-repeat;
    background-attachment: fixed;

	}
	form{
		color: #FFFFFF !important;

	}
	.ant-form-item-label > * {
		color: #FFFFFF !important;

	}
	h1 {
		color:  #FFFFFF !important;
		text-align: center;
	}

	h2 {
		color:  #FFFFFF !important;
		text-align: center;
	}

	img {
		width: 300px;
		transition: .3s;
		cursor: pointer;
		transform: rotate3d(0, 1, 0, 180deg)
	}
	#selectCoin{
		margin: -100px 0 100px 0;
	}

	button {
		background: none !important;
		border-radius: 10px !important;
		/* padding: 16px 24px !important; */
		display: flex !important;
		justify-content: center !important;
		align-items: center !important;
		/* width: 100%; */
		* {
			color: white !important;
		}
		img {
			width: 24px;
			height: 24px;
		}
	}

	input {
		background: #FFC916 !important;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25)!important;
		border-radius: 10px!important;
		width: 100% !important;
		color: black !important;
		padding: 30px 100px !important;
	}

	.App {
		margin: 120px 0 120px 0;
		padding: 24px;
		max-width: 548px;
		background: black;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25)!important;
		border-radius: 25px!important;

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

