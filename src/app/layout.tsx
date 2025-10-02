
import type { Metadata } from "next";
import { Roboto_Slab, Yellowtail, Press_Start_2P } from "next/font/google";

import { GoogleAnalytics } from '@next/third-parties/google';

// import CookiesConsent from './components/cookies-consent';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
config.autoAddCss = false;

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
});

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
});

const yellowtail = Yellowtail({
  weight: ["400"],
  subsets: ["latin"]
});

import "./globals.scss";

const metaFings = {
  title: "The Cruzat : A Human Doing Things On Earth",
  description: "Dan Cruzat is an engineer of UI's and soundwaves, building and kvetching in Portland, OR.",
  image: "social.png",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thecruzat.com"),
  title: metaFings['title'],
  description: metaFings['description'],
  openGraph: {
    title: metaFings['title'],
    description: metaFings['description'],
    url: 'https//thecruzat.com',
    siteName: metaFings['title'],
    images: [
      {
        url: metaFings['image'],
        width: 1200,
        height: 900,
        alt: "The Cruzat is a Builder"
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: metaFings['title'],
    description: metaFings['description'],
    creator: '@_cruzat',
    images: [metaFings['image']],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSlab.className} antialiased`}
      >
        <GoogleAnalytics gaId="G-0DR12ND02R" />
        {children}
        {/*<CookiesConsent />*/}
      </body>
    </html>
  );
}
