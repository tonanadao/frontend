import styled from "styled-components";
import img from "./static/img/vidPreview.png";
export const Main = styled.div`
  background: #19243B;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #19243B;
`

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0), #FF9B02, rgba(0, 0, 0, 0));
`

export const Logo = styled.img`
  margin: 6px 24px 0 0;
`

export const Text = styled.div`
  display: flex;
  align-items: center;
`

export const Item = styled.div<({gold?: boolean})>`
  background: ${({gold})=> gold ? "-webkit-linear-gradient(#FED603,#FF5C00)" : "#fff"};
  font-size: 16px;
  line-height: 25px;
  cursor: pointer;
  text-transform: uppercase;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 24px;
`

export const Img = styled.img`
  margin: 0 auto -70px auto;
`

export const Title = styled.div`
  display: flex;
  color: #fff;
  font-size: 40px;
  line-height: 63px;
  margin: auto;
  > span {
    background: -webkit-linear-gradient(#FED603,#FF5C00);
    text-transform: uppercase;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 8px;
  }
`

export const Titleh2 = styled.div`
  font-size: 20px;
  line-height: 31px;
  text-transform: uppercase;
  color: #fff;
  margin: 15px 0;
`

export const About = styled.div`
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  margin: auto;
  color: #fff;
  width: 903px;
  margin: 0 auto 9px auto;
  > span {
    background: -webkit-linear-gradient(#FED603,#FF5C00);
    text-transform: uppercase;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const Vid = styled.div`
  border: 3px solid #FF9B02;
  border-radius: 20px;
  width: 437px;
  height: 264px;
  margin: 13px auto 0 auto;
  background-image: url(${img});
  background-size: contain;
`

export const Footer = styled.div`
  height: 76px;
  position: fixed;
  bottom: 0;
  width: 100vw;
  background: #101727;
`
export const LinksContainer = styled.div`
  max-width: 930px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 14px 0;
  gap: 10px;
`

export const Loader = styled.img`
  animation-name: spin;
  animation-duration: 2500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
  width: 80px !important;
  position: absolute;
  bottom: 20px;
  right: 20px
  /* margin: 48px; */
`

export const Link = styled.div`
  font-size: 10px;
  line-height: 16px;
  color: #FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
`

export const Ico = styled.img`
  margin: 0 8px 0 0;
`
