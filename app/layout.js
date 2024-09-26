import { Roboto_Flex } from 'next/font/google';
import './globals.css';
import TitleBar from './components/TitleBar';

export const metadata = {
  title: 'Julio`s Test',
  description: '- Metaversal',
};

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--roboto-flex',
  display: 'swap',
  weight: ['500', '700', '800'],
  // axes: ["wdth"] //figure it out why is not working
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoFlex.className} antialiased bg-[#F9FAFA]`}>
        <TitleBar></TitleBar>
        <div className="w-[100vw] max-w-[700px] mx-auto min-h-screen py-[32px] px-[16px] md:p-[32px]">
          {children}
        </div>
      </body>
    </html>
  );
}
