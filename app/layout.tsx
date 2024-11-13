import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Dock from "@/components/home/dock";
import Image from "next/image";
import SmoothScrolling from "@/components/SmoothScroll";

const recursive = Recursive({
  subsets: ["latin"],
  weight: ["1000", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Edit Ease",
  description: "A Designing Agency that helps you to design your dreams",
  icons: [
    {
      url: "/logo.png",
      href: "/logo.png",
      rel: "favicon",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${recursive.className}  antialiased dark:bg-black bg-stone-200  `}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          <SmoothScrolling>
            <main>
              <span className="main-cont hidden dark:flex fixed -z-50" />
              {/* <span className="main-cont2 flex dark:hidden fixed -z-50 blur-xl " /> */}
              <div className="w-full h-screen fixed -z-50 ">
                <Image
                  src={"/Images/noise-2.jpg"}
                  alt="noise"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <section className="">
                <div className="relative z-[99]">{children}</div>
              </section>
            </main>
            <Dock />
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
