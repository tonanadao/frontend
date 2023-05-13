import styled from "styled-components";
import { Button } from "antd";
import {
	FaMediumM,
	FaDiscord,
	FaTwitter,
	FaLinkedin,
	FaTelegram,
	FaGithub,
} from "react-icons/fa";

export const SocialIconList = styled.ul`
  list-style:none;
  display:flex;
  justify-content:center;
  align-items:center;
  padding-left: 0px;
`;

export const SocialIconListItem = styled.li`
  margin: 10px;
`;

export const SocialIconLink = styled.a`
  position: relative;
  display: inline-block;
  text-align: center;
  overflow: hidden;
  color: #fff;
  border-color: #adb5bd;
  fill: #ffc916;
  transition: all 0.4s ease;

  :hover {
    color: #ffc916 !important;
  }

  .fea-social {
    stroke-width: 2;
  }
`;

export const GithubIcon = styled(FaGithub)`
  width: 32px;
  height: 32px;
`;

export const TwitterIcon = styled(FaTwitter)`
  width: 32px;
  height: 32px;
`;

export const LinkedinIcon = styled(FaLinkedin)`
  width: 32px;
  height: 32px;
`;

export const TelegramIcon = styled(FaTelegram)`
  width: 32px;
  height: 32px;
`;

export const DiscordIcon = styled(FaDiscord)`
  width: 32px;
  height: 32px;
`;