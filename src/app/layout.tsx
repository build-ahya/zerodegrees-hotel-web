import type { Metadata } from 'next';
import DefaultLayout from '@/components/layout/Default';
import constants from '@/constants';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: `%s | ${constants.brandName}`,
    default: constants.brandName,
  },
  description: constants.description,
  metadataBase: new URL(constants.baseUrl),
  keywords: constants.keywords,
  openGraph: {
    title: constants.brandName,
    description: constants.description,
    images: constants.openGraphImage,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
