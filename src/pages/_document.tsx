import data from '@/data/data.json';
import { Html, NextScript, Head } from 'next/document';

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <link href="/logo.svg" rel="icon" />
                <link
                    href={`${data.website}/rss.xml`}
                    rel="alternate"
                    title="RSS"
                    type="application/rss+xml"
                />
                <meta
                    content={`${data.website}/og-image.png`}
                    property="og:image"
                />
                <meta
                    content="Kunal, Singh, Kunal Singh, web dev"
                    name="keywords"
                />
                <link href="/icon.png" rel="apple-touch-icon"></link>
                <meta content="#fff" name="theme-color" />
            </Head>
            <body>
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
