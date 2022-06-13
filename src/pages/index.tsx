import Head from 'next/head'
import Image from 'next/image'
import { AppProvider, Layout, Frame } from '@shopify/polaris'
import { Provider, useAppBridge } from "@shopify/app-bridge-react";
import { LiveChatLoaderProvider } from "react-live-chat-loader";
import translations from "@shopify/polaris/locales/en.json";

import Header from 'src/components/header'
import Menu from 'src/components/Menu'

export default function AppHome() {
  return (        
    <AppProvider i18n={translations}>
      <Provider
        config={{
          apiKey: 'e3285cde84517cb09df14b9736ec09bc',
          host: 'aG90Ym90c3RvcmUubXlzaG9waWZ5LmNvbS9hZG1pbg',
          forceRedirect: true,
        }}
      >
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
      </Provider>
    </AppProvider>
  )
}
