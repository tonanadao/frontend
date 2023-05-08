import { createGlobalStyle } from "styled-components";
// import Baloo from "../static/Inter-roman.var.woff2";
const Gstyles = createGlobalStyle`

@font-face {
		@import url("https://fonts.googleapis.com/css?family=Nunito:300,400,600,700&display=swap");
		@import url("https://fonts.googleapis.com/css2?family=Livvic:wght@400;500;600;700&display=swap");
	}
iframe{
	display:none ;
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
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.ant-form-item-label > * {
		color: #FFFFFF !important;

	}
	.cantSelect{
		color: gray;
		cursor: not-allowed;
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
		/* transform: rotate3d(0, 1, 0, 180deg) */
	}
	/* style={{ margin: "-60px 0 0 0", border: "none" }} */

	#selectCoin{
		margin: -60px 0 0 0;
		border: none;
		span {
			color: #d9d9d9;
		}
		margin: 0 0 -56px 0;
		@media (max-width: 520px) {
		margin: 0 0 -56px 0;

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
	width: 100%;
	background: #FFC916 !important;
	
}
#submitBtn:hover{
	color: black !important;
}
#nonactivesubmitBtn:hover{
	color: black !important;
}
#nonactivesubmitBtn{
	width: 100%;
	background: #FFC916 !important;
	filter: grayscale(100%) contrast(50%) !important;
	opacity: .3;
}
#topnav {
	width:100%;
	height:12vh;
		@media (max-width: 1024px) {
	margin: 0 0 64px 0;
}
}

.logo {
    left: 0;
    position: absolute;
		transform:   rotate3d(0, 1, 0, 180deg);
		@media (max-width: 1024px) {
			left: 50%;
			transform: translate( -50%) rotate3d(0, 1, 0, 180deg);
      margin: -30px 0 30px 0;
    }
}
.ant-message {
	max-width: 20%;
	right: 0 !important;
	left: auto !important;
	@media (max-width: 767px) {
		max-width: 100% !important;
	}	
}	


.ant-btn-primary {
    color: #212529;
    border-color: transparent;
    background: #1890ff;
    text-shadow: transparent;
    box-shadow: transparent;
}
.ant-dropdown-menu {
	background: #3c4858 !important;
		span {
			color: #d9d9d9 !important;
			:hover {
				color: #3c4858 !important;
			}
			:focus {
				color: #3c4858 !important;
			}
			:active {
				color: #3c4858 !important;
			}
	}
}
	input {
		background: #161c2d !important;
		border-radius: 10px!important;
		border: none !important;
		width: 100% !important;
		color: white !important;
		padding: 30px 130px 30px 130px !important;
		/* font-size: 28px!important; */
		/* box-sizing: border-box!important; */
		padding: 8px 12px !important;
		@media (max-width: 520px) {
		padding: 8px 12px !important;

			
		}
	}
	.social-icon {
		list-style:none;
		display:flex;
		justify-content:center;
		align-items:center;
    padding-left: 0px;

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
			:selection {
				color: #FFC916 !important;
			}
			:hover {
				color: #FFC916 !important;
			}
			:active {
				color: #FFC916 !important;
			}
			:focus {
				color: #FFC916 !important;
			}
	  } 
	  
	.App {
		margin: 36px 0 36px 0;
		padding: 34px;
		display: flex !important;
		justify-content:center !important;
		align-items:center !important;
		max-width: 480px;
		/* width: 648px; */
		background: #161c2d;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.35)!important;
		border-radius: 25px!important;
		/* background: black ; */
		width: 480px;
		@media (max-width: 520px) {
		max-width: auto;
		width: auto;
		margin: 20px 10px 120px 10px ;

		}

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
		margin: 24px 0;
		@media (max-width: 520px) {
		margin: 24px 0;
			
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
	.version{
	color: white;
	/* left: 50%; */
	text-align: center;
	font-size: 16px;
	margin: 0 0 64px 0;
	padding: 0 0 36px 0;
	/* position: relative; */
	/* transform: translate(-50%); */
	}
	.rpcs{
		display: flex ;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	color: white;
		margin: 0 0 24px 0;

	}
	.rpcs-status{
		display: flex ;
		justify-content: center;
		align-items: center;
	}
	.rpc-green{
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: green;
		margin: 0 8px 0 0;
	}
	.rpc-red{
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: red;
		margin: 0 8px 0 0;

	}

.selector {
  display: flex;
  justify-content: space-around;
  position: relative;
  z-index: 100;
  div {
    display: flex;
    justify-content: space-around;
    background: green;
    cursor: pointer;
    color: white !important;
		padding: 10px 30px; 
		background: #161c2d;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.35)!important;
		border-radius: 25px!important;
		span {
		  margin: 6px 0 0 4px;
		  color: gray;
		  font-size: 9px;
		}
  }
}
.selectorsoon {
  cursor: not-allowed !important;
	color: gray !important;
}
  `;

export default Gstyles;
