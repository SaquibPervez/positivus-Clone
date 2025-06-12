import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.className}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
