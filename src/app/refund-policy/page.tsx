import { Suspense } from 'react';
import { Viewport } from 'next';
import Loading from '@/components/loading';
import { RefundSection1, RefundSection2 } from '@/components/sections';
import constants from '@/constants';

export const viewport: Viewport = {
  themeColor: '#0C3150',
};
export const metadata = {
  title: `Refund Policy | ${constants.brandName}`,
};
export default function RefundPolicy() {
  return (
    <Suspense fallback={<Loading />}>
      <RefundSection1 />
      <RefundSection2 />
    </Suspense>
  );
}
