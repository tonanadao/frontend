import styled from "styled-components";
import { Button, message, Dropdown } from "antd";

export const Loader = styled.img`
	animation-name: spin;
	animation-duration: 2500ms;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	width: 80px !important;
	position: fixed;
	bottom: 20px;
	right: 20px;
`;

export const Version = styled.div`
	color: white;
	/* left: 50%; */
	text-align: center;
	font-size: 16px;
	margin: 0 0 64px 0;
	padding: 0 0 36px 0;
	/* position: relative; */
	/* transform: translate(-50%); */
`;

export const SelectCoin = styled(Button)`
	margin: -60px 0 0 0;
	border: none;
	span {
		color: #d9d9d9;
	}
	margin: 0 0 -56px 0;
	@media (max-width: 520px) {
	margin: 0 0 -56px 0;
	}
`;

export const RpcSyled = styled.div`
	display: flex ;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
	margin: 0 0 24px 0;
`;

export const RpcsStatus = styled.div`
	display: flex ;
	justify-content: center;
	align-items: center;
`;

export const RpcGreen = styled.div`
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background: green;
	margin: 0 8px 0 0;
`;

export const RpcRed = styled.div`
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background: red;
	margin: 0 8px 0 0;
`;

export const AppDiv = styled.div`
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
`;

export const Selector = styled.div`
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
`;

export const ConnectWalletBtn = styled(Button)`
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

`;

export const DirectionBtn = styled.div`
	display: flex;
	justify-content: center;
	svg{
		width: 18px;
		height: 18px;
	}
	
`;

export const SubmitBtn = styled(Button)`
	width: 100%;
	background: #FFC916 !important;
	&:hover {
		color: black !important;
  }

`;

export const NonactiveSubmitBtn = styled(Button)`
	width: 100%;
	background: #FFC916 !important;
	filter: grayscale(100%) contrast(50%) !important;
	opacity: .3;
	&:hover {
		color: black !important;
  }

`;

export const Topnav = styled.header`
	width:100%;
	height:12vh;
		@media (max-width: 1024px) {
	margin: 0 0 64px 0;
}
`;

export const LogoSC = styled.img`
    left: 0;
    position: absolute;
		transform:   rotate3d(0, 1, 0, 180deg);
		@media (max-width: 1024px) {
			left: 50%;
			transform: translate( -50%) rotate3d(0, 1, 0, 180deg);
      margin: -30px 0 30px 0;
    }
`;