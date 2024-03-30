import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction, MetaFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

// export const meta: MetaFunction = () => {
//   return [
//     { title: "HolyCat" },
//     {
//       property: "og:title",
//       content: "HolyCat",
//     },
//     {
//       name: "description",
//       content: "This app is the best",
//     },
//     { title: "Stephen Hackett-Delaney" },
//     { description: "Software engineer portfolio" },
//     { keywords: ['Stephen Hackett-Delaney', 'Stephen hd', 'stephenhd', 'Next.js', 'React', 'JavaScript', 'web design', 'website design', 'website builder'] },
//     { authors: [{ name: 'Stephen Hackett-Delaney', url: 'https://www.stephenhd.com/' }] },
//     { creator: 'Stephen Hackett-Delaney' },
//     { publisher: 'Stephen Hackett-Delaney' },
//     {
//       openGraph: {
//         title: "Stephen Hackett-Delaney",
//         description: "Software engineer portfolio",
//         url: 'https://www.stephenhd.com/',
//         siteName: 'Stephen Hackett-Delaney',
//         images: [
//           {
//             url: 'https://www.stephenhd.com/opengraph-image.png', // Must be an absolute URL
//             width: 1200,
//             height: 630,
//           },
//         ],
//         locale: 'en_US',
//         type: 'website',
//       }
//     },
//     {
//       twitter: {
//         card: 'summary_large_image',
//         title: 'Stephen Hackett-Delaney',
//         description: 'Software engineer portfolio',
//         creator: 'Stephen Hackett-Delaney',
//         images: ['https://www.stephenhd.com/twitter-image.png'], // Must be an absolute URL
//       }
//     },
//     {
//       robots: {
//         index: false,
//         follow: true,
//         nocache: true,
//         googleBot: {
//           index: true,
//           follow: false,
//           noimageindex: true,
//           'max-video-preview': -1,
//           'max-image-preview': 'large',
//           'max-snippet': -1,
//         },
//       }
//     },
//   ];
// };

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
