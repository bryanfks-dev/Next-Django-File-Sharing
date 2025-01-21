import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const rubik = localFont({
  src: [
    {
      path: "../../assets/fonts/Rubik-Light.ttf",
      weight: "300",
    },
    {
      path: "../../assets/fonts/Rubik-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../assets/fonts/Rubik-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../assets/fonts/Rubik-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../assets/fonts/Rubik-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../assets/fonts/Rubik-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../../assets/fonts/Rubik-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Next Sharing",
  description: "Share your file to the local network with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${rubik.variable} antialiased`}>
        <main className="min-h-dvh w-full">{children}</main>
      </body>
    </html>
  );
}
