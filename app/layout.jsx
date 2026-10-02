import { Poppins, Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Mohammed Ajmal A | Digital & Performance Marketing Portfolio",
  description:
    "Portfolio of Mohammed Ajmal A, a digital marketing professional in Chennai specialising in Meta Ads, Google Ads, lead generation, analytics and campaign management.",
  openGraph: {
    title: "Mohammed Ajmal A | Digital & Performance Marketing",
    description:
      "Meta Ads, Google Ads, lead generation and campaign analytics. Portfolio of Mohammed Ajmal A.",
    images: ["/profile-pic.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${greatVibes.variable} scroll-smooth antialiased dark`}
    >
      <body className="bg-[#0D0D0D] font-sans text-white selection:bg-[#C6F52B] selection:text-[#0D0D0D]">
        {children}
      </body>
    </html>
  );
}
