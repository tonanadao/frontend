import styled from "styled-components";

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

export const Links = styled.span`
	display: flex;
	justify-content: center;
	a {
		margin: 0 4px;
	}
`;

export const DevLinks = styled.span`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Version = styled.div`
	display: flex;
	justify-content: center;
	font-size: 10px;
	margin: 48px auto -48px auto;
`;
