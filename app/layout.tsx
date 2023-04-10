import React from "react";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="description" content="Klone"/>
        <title>Klone</title>
      </head>
      <body><noscript>You need to enable JavaScript to run this app.</noscript>{children}</body>
    </html>
  )
}
