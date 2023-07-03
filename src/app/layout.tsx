import './globals.css';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Header from './components/Header.jsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Business Analyzer',
  description:
    'Get more detailed information about desired businesses and perform a Google Lighthouse analysis on them.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
