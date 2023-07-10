import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header.jsx';
import { getHomePageData } from '../../utils/ButterCMS';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Business Analyzer',
  description: 'Get more detailed information about desired businesses and perform a Google Lighthouse analysis on them.',
};

export default async function RootLayout({ children }) {
  const { header_component } = await getHomePageData();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header heading={header_component.heading} subheading_1={header_component.subheading_1} subheading_2={header_component.subheading_2} />
        <main>{children}</main>
      </body>
    </html>
  );
}
