import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = '' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta property="og:title" content="" />
      <meta property="og:type" content="" />
      <meta property="og:url" content="" />
      <meta property="og:image" content="" />

      <link rel="manifest" href="site.webmanifest" />
      <link rel="apple-touch-icon" href="icon.png" />

      <link rel="stylesheet" href="/css/normalize.css" />
      <link rel="stylesheet" href="/css/main.css" />

      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&family=Rokkitt:wght@300&display=swap" rel="stylesheet" />

      <meta name="theme-color" content="#fafafa" />
    </Head>
    <header>
      <img src="/img/logo.svg" alt="Random Password Generator" />
    </header>
    {children}

    <script src="/js/vendor/modernizr-3.11.2.min.js"></script>
    <script src="/js/plugins.js"></script>
    <script src="/js/main.js"></script>
  </div>
)

export default Layout
