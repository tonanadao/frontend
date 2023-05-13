
import { SocialIconList, SocialIconListItem, SocialIconLink, GithubIcon, TwitterIcon, LinkedinIcon, TelegramIcon, DiscordIcon } from "./styles";

// import { Link } from 'react-router-dom';
// import ScrollspyNav from './scrollSpy';

// import Logo from '../../assets/images/tonana.png';

const Social = () => {
	return (
		<SocialIconList>
      <SocialIconListItem>
        <SocialIconLink href="https://github.com/tonanadao" className="icon-hover rounded" target="_blank">
          <GithubIcon className="fea-social" />
        </SocialIconLink>
      </SocialIconListItem>

      <SocialIconListItem>
        <SocialIconLink href="https://twitter.com/Tonanadao" target="_blank" className="icon-hover rounded">
          <TwitterIcon className="fea-social" />
        </SocialIconLink>
      </SocialIconListItem>

      <SocialIconListItem>
        <SocialIconLink href="https://www.linkedin.com/company/tonana/" target="_blank" className="icon-hover rounded">
          <LinkedinIcon className="fea-social" />
        </SocialIconLink>
      </SocialIconListItem>

      <SocialIconListItem>
        <SocialIconLink href="https://t.me/tonanadao" target="_blank" className="icon-hover rounded">
          <TelegramIcon className="fea-social" />
        </SocialIconLink>
      </SocialIconListItem>

      <SocialIconListItem>
        <SocialIconLink href="https://discord.gg/wy9x6jF8PC" target="_blank" className="icon-hover rounded">
          <DiscordIcon className="fea-social" />
        </SocialIconLink>
      </SocialIconListItem>
    </SocialIconList>
	);
};

export default Social;
