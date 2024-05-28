import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
    const locale = "ar";

    return {
        metadataBase: new URL("https://hardive-seo.vercel.app"),
        title: "Create Next App",
        description: "Generated by create next app",
        openGraph: {
          images: [
            {
              url: `opengraph-image-${locale}.png`,
              width: 1200,
              height: 630,
              alt: "Create Next App"
            }
          ]
        }
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
