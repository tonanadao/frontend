import styled from "styled-components";
import { Button } from "antd";

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
  margin-top: 36px;
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


export const DirectionBtn = styled.div`
	display: flex;
	justify-content: center;
	svg{
		width: 18px;
		height: 18px;
	}
	
`;