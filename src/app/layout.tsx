import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Provider } from "jotai";

export const metadata = {
  title: "wAIfu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>{children}</body>
      </html>
    </Provider>
  );
}
