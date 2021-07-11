import Head from 'next/head';
import { AppProps } from 'next/app';

import '../style/global.css';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
                />
                <meta name='mobile-web-app-capable' content='yes' />
                <title>오늘의 점심 값</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;
