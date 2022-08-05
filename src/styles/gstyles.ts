

import { createGlobalStyle } from "styled-components";
// import Baloo from "../static/Inter-roman.var.woff2";



const Gstyles = createGlobalStyle`
	@font-face {
		@import url("https://fonts.googleapis.com/css?family=Nunito:300,400,600,700&display=swap");
		@import url("https://fonts.googleapis.com/css2?family=Livvic:wght@400;500;600;700&display=swap");
	}

	* {
		font-family: "Livvic", sans-serif;
    	font-weight: 500;
  }

	body {
		background: #161c2d;
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
		span {
			color: #d9d9d9;
		}
	}

	button {
		background: none !important;
		border-radius: 10px !important;
		/* padding: 16px 24px !important; */
		display: flex !important;
		justify-content: center !important;
		align-items: center !important;
		
		img {
			width: 24px;
			height: 24px;
			margin: 0 6px 0 0;
		}
	}
#submitBtn{
	background: #FFC916 !important;
	span {
	}
}
#topnav {
	width:100%;
	height:12vh;
}
.logo {
    left: 0;
    position: absolute;
}
.ant-btn-primary {
    color: #212529;
    border-color: transparent;
    background: #1890ff;
    text-shadow: transparent;
    box-shadow: transparent;
	color: 
}

	input {
		background: #161c2d !important;
		border-radius: 10px!important;
		border: none !important;
		width: 100% !important;
		color: white !important;
		padding: 30px 130px !important;
		font-size: 28px!important;
		/* box-sizing: border-box!important; */
	}
	.social-icon {
		list-style:none;
		display:flex;
		justify-content:center;
		align-items:center;
	}
	.social-icon li a {
		fill:#FFC916;
		display: inline-block;
		margin: 10px;
		text-align: center;
		-webkit-transition: all 0.4s ease;
		transition: all 0.4s ease;
		overflow: hidden;
		position: relative;
	  }
	  
	  .social-icon li a .fea-social {
		stroke-width: 2;
	  }
	  
	  .social-icon li a:hover {
		background-color: transparent !important;
		border-color: transparent !important;
		color: #ffffff !important;
	  }
	  
	  .social-icon li a:hover .fea-social {
		fill: #2f55d4;
		color: #ffffff !important;
	  }
	  
	  .social-icon.social li a {
		color: #fff;
		border-color: #adb5bd;
	  }
	  
	  .social-icon.foot-social-icon li a {
		color: #ffffff !important;
		border-color: transparent;
	  }
	  .social-icon svg {
		width:32px;
		height:32px;
	  } 
	  
	.App {
		margin: 120px 0 120px 0;
		padding: 34px;
		display: flex !important;
		justify-content:center !important;
		align-items:center !important;
		max-width: 648px;
		background: #161c2d;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25)!important;
		border-radius: 25px!important;
	}
	.Container {
		width:100vw;
		display:flex;
		flex-direction: row;
		align-items:center;
		justify-content: space-around;
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
		color: #212529 !important;
		border: none !important;
		background: #FFC916!important;
		margin: -30px 12px 24px 0;
		float: right;

		span {
		}

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

