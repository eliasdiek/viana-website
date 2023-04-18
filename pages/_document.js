import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from '../lib/gtag';
import { GTM_ID } from '../lib/gtm';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="shortcut icon" href="/vercel.svg" type="image/svg" />

					<meta name="title" content="Mabel de Jesus Viana Arias | Full Stack Developer" />
					<meta name="description" content="Technically sophisticated, competent, and innovative Software Engineer, with experience in web & hybrid mobile programming, business analysis, IT management, business intelligence, and integration of enterprise applications." />

					<meta property="og:title" content="Mabel de Jesus Viana Arias | Full Stack Developer" key="title" />
					<meta property="og:site_name" content="Mabel de Jesus Viana Arias | Full Stack Developer" />
					<meta property="og:type" content="website" />
					<meta property="og:description" content="Technically sophisticated, competent, and innovative Software Engineer, with experience in web & hybrid mobile programming, business analysis, IT management, business intelligence, and integration of enterprise applications." />

					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content="Mabel de Jesus Viana Arias | Full Stack Developer" />
					<meta name="twitter:description" content="Technically sophisticated, competent, and innovative Software Engineer, with experience in web & hybrid mobile programming, business analysis, IT management, business intelligence, and integration of enterprise applications." />

					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());

								gtag('config', '${GA_TRACKING_ID}', {
									page_path: window.location.pathname,
								});
							`,
						}}
					/>
					
					<script dangerouslySetInnerHTML={{
						__html: `dataLayer = [];`
					}}>
					</script>

					{/* Google Tag Manager - Global base code */}
					<script
						dangerouslySetInnerHTML={{
						__html: `
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer', '${GTM_ID}');
						`,
						}}
					/>
				</Head>
				<body>
					<noscript>
						<iframe
						src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
						height="0"
						width="0"
						style={{ display: 'none', visibility: 'hidden' }}
						/>
					</noscript>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
