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

export const meta: MetaFunction = () => {
  return [
    { title: "HolyCat" },
    {
      name: "description",
      content: "HolyCat token",
    },
    {
      property: "og:title",
      content: "HolyCat",
    },
    {
      property: "og:image",
      content: "https://holy-cat.vercel.app/holycat_preview.png"
    },
    {
      name: "twitter:title",
      content: "HolyCat"
    },
    {
      name: "twitter:description",
      content: "HolyCat token"
    },
    {
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      name: "twitter:image",
      content: "https://holy-cat.vercel.app/holycat_preview.png"
    },
  ];
};

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
