import { Suspense } from 'react';
import { Viewport } from 'next';
import Loading from '@/components/loading';
import { TermsSection1, TermsSection2 } from '@/components/sections';
import constants from '@/constants';

export const viewport: Viewport = {
  themeColor: '#0C3150',
};
export const metadata = {
  title: `Terms of Condition | ${constants.brandName}`,
};

export default function Terms() {
  return (
    <Suspense fallback={<Loading />}>
      <TermsSection1 />
      <TermsSection2 />
    </Suspense>
  );
}
