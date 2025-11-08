import { Suspense } from 'react';
import { Viewport } from 'next';
import Loading from '@/components/loading';
import constants from '@/constants';
import { AboutSection1, AboutSection2, AboutSection3, AboutSection4 } from '@/components/sections';

export const viewport: Viewport = {
  themeColor: '#0C3150',
};
export const metadata = {
  title: `About Us | ${constants.brandName}`,
};
export default function About() {
  return (
    <Suspense fallback={<Loading />}>
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
    </Suspense>
  );
}
