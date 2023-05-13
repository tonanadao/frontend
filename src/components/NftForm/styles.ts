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