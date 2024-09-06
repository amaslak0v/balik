import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from './providers';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Baliotchi",
  description: "Find what you need in Bali!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
