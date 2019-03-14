import Head from "next/head";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const pixelCode = () => {
	!(function(f, b, e, v, n, t, s) {
		if (f.fbq) return;
		n = f.fbq = function() {
			n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
		};
		if (!f._fbq) f._fbq = n;
		n.push = n;
		n.loaded = !0;
		n.version = "2.0";
		n.queue = [];
		t = b.createElement(e);
		t.async = !0;
		t.src = v;
		s = b.getElementsByTagName(e)[0];
		s.parentNode.insertBefore(t, s);
	})(
		window,
		document,
		"script",
		"https://connect.facebook.net/en_US/fbevents.js"
	);
	fbq("init", "546239092532551");
	fbq("track", "PageView");
};

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

		<script>pixelCode()</script>
		<noscript>
			<img
				height="1"
				width="1"
				style={{ display: "none" }}
				src="https://www.facebook.com/tr?id=546239092532551&ev=PageView&noscript=1"
			/>
		</noscript>
	</Head>
);

export default Meta;
