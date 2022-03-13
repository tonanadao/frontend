import styled from "styled-components";

export const Loader = styled.img`
  animation-name: spin;
  animation-duration: 2500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
  width: 80px !important;
  position: absolute;
  bottom: 20px;
  right: 20px;
`