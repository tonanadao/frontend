import styled from "styled-components";

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