import React from "react";
import {Html, Head} from 'next/document';

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <link rel="icon" href="/static/yt-favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="description" content="Web site created using create-react-app"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <title>YouTube</title>
      </head>
      <body><noscript>You need to enable JavaScript to run this app.</noscript>{children}</body>
    </html>
  )
}
