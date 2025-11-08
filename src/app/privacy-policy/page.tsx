import { Suspense } from 'react';
import { Viewport } from 'next';
import Loading from '@/components/loading';
import { PrivacySection1, PrivacySection2 } from '@/components/sections';
import constants from '@/constants';

export const viewport: Viewport = {
  themeColor: '#0C3150',
};
export const metadata = {
  title: `Privacy Policy | ${constants.brandName}`,
};
export default function PrivacyPolicy() {
  return (
    <Suspense fallback={<Loading />}>
    <PrivacySection1 />
    <PrivacySection2 />
  </Suspense>
  )
}
