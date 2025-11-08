import { Suspense } from 'react';
import { Viewport } from 'next';
import Loading from '@/components/loading';
import { ContactSection1, ContactSection2 } from '@/components/sections';
import constants from '@/constants';

export const viewport: Viewport = {
  themeColor: '#0C3150',
};

export const metadata = {
  title: `Contact Us | ${constants.brandName}`,
};

export default function Contact() {
  return (
    <Suspense fallback={<Loading />}>
      <ContactSection1 />
      <ContactSection2 />
    </Suspense>
  );
}
