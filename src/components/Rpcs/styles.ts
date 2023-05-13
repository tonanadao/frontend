import styled from "styled-components";
import { Button } from "antd";

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