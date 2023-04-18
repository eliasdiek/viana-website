import "../styles/global.css";
import Head from 'next/head';
import Tracking from "../components/tracking";

export default function App({ Component, pageProps }) {
	return (
		<Tracking>
		    <Head>
				<title>Mabel de Jesus Viana Arias | Full Stack Developer</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			</Head>
			<Component {...pageProps} />
		</Tracking>
	);
}
