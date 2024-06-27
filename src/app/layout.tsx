import type { Metadata } from "next";
import Gnb from "./gnb";
import "./globals.scss";

export const metadata: Metadata = {
  title: "UI 요소들 | 이연정",
  description: "Vanilla JS, React로 UI 요소 만들기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Gnb />
        <main>{children}</main>
      </body>
    </html>
  );
}
