import Head from "next/head";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const Meta = () => (
	<Head>
		<title> Flightless Nerd</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link
			rel="stylesheet"
			type="text/css"
			href="/static/css/bootstrap-reboot.min.css"
		/>
		<link
			rel="icon"
			type="image/x-icon"
			href="/static/images/Austrich_favicon.png"
		/>
		<link
			href="https://fonts.googleapis.com/css?family=Montserrat:400,500|Raleway:400|Bangers"
			rel="stylesheet"
		/>
		<meta
			property="fb:app_id"
			content={publicRuntimeConfig.fbAppId || "00000"}
		/>
		<meta
			name="google-site-verification"
			content="TkU1zgWPRfxHho7wx9-HpitRs3JqFNn78RU8WUIq2IE"
		/>
	</Head>
);

export default Meta;
