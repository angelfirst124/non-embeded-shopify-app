import Head from 'next/head'
import Image from 'next/image'
import { AppProvider, Layout, Frame } from '@shopify/polaris'
import { LiveChatLoaderProvider } from "react-live-chat-loader";
import translations from "@shopify/polaris/locales/en.json";

import Header from 'src/components/header'
import Menu from 'src/components/Menu'

export default function AppHome({Components, pageProps}) {
    return (        
        <AppProvider i18n={translations}>
            <Frame>
                <div className="home-page">
                    <div className="inner">
                    <Header />
                    <div className="content container">
                        <Layout>
                        <nav className="navigation">
                            <Layout.Section secondary>
                            <Menu />
                            </Layout.Section>
                        </nav>
                        <Layout.Section>
                            {/* <MyProvider Component={Component} {...pageProps} /> */}
                        </Layout.Section>
                        </Layout>
                    </div>
                </div>
              </div>
            </Frame>
        </AppProvider>
    )
}
