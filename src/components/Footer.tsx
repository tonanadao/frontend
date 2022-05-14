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
			<h2>Devs / Co-Founders:</h2>
			<DevLinks>
				<a href={"https://t.me/sepezho"}>Sepezho (FE dev / co-founder)</a>
				<a href={"https://t.me/gthlp_coordinator"}>
					Gthlp_coordinator (BE dev / co-founder)
				</a>
				<a href={"https://t.me/cyber_ea"}>Cyber_ea (FE dev / co-founder)</a>
			</DevLinks>

			<Version>
				<a href={"https://tonana.org"}>tonana.org</a>
			</Version>
			<Version>v0.0.2.0 (alfa)</Version>
		</div>
	);
};

export default Footer;
