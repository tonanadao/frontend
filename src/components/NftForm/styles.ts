import styled from "styled-components";
import { Button } from "antd";


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

export const NftSelector = styled.div`
	img {
		width: 100px;
	}
 > div {
	display: flex;
 overflow-x: scroll;
 color: white;
 > div {
 max-width: 100px;
 		margin: 10px;
 }
 position: relative;
 }
 position: relative;
 overflow-x: scroll;
 width: 100%;
`