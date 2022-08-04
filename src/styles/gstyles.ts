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
			margin: 0 6px 0 0;
		}
	}
#submitBtn{
		width: 100%;

}
	input {
		background: #1E1E1E !important;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25)!important;
		border-radius: 10px!important;
		border: none !important;
		width: 100% !important;
		color: white !important;
		padding: 30px 130px !important;
		font-size: 28px!important;
		/* box-sizing: border-box!important; */
	}

	.App {
		margin: 120px 0 120px 0;
		padding: 34px;
		max-width: 648px;
		background: black;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25)!important;
		border-radius: 25px!important;

	}
	iframe {
		display:none ;
	}
	#directionBtn{
		display: flex;
		justify-content: center;
		svg{
			width: 18px;
			height: 18px;
		}
	}
	#connectWalletBtn{

	border: none !important;
	background: #FC9110!important;
	margin: -30px 12px 24px 0;
	float: right;
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

