import { DevLinks, Links, Version } from "../styles/style";
import { Divider } from "antd";

const Footer = () => {
	return (
		<div>
			<Divider dashed />
			<h2>Stay connected!</h2>
			<Links>
				<a href={"https://twitter.com/TonanaBridge"}>Twitter</a>
				<a href={"https://t.me/tonanadao"}>Telegram</a>
				<a
					href={
						"https://www.linkedin.com/company/tonana/?trk=companies_directory&originalSubdomain=cz"
					}>
					LinkedIn
				</a>
				<a href={"https://github.com/tonanabridge"}>GitHub</a>
			</Links>
			<Divider dashed />
			<h2>Devs:</h2>
			<DevLinks>
				<a href={"https://t.me/sepezho"}>Sepezho (FE dev / founder)</a>
				<a href={"https://t.me/gthlp_coordinator"}>
					Gthlp_coordinator (BE dev / co-founder)
				</a>
				<a href={"https://t.me/cybergangsta"}>Cybergangsta (JUN FE dev)</a>
			</DevLinks>

			<Version>
				<a href={"https://tonana.org"}>lending tonana.org</a>
			</Version>
			<Version>v0.0.1.5 (alfa)</Version>
		</div>
	);
};

export default Footer;
