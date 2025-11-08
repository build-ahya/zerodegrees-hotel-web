import { Suspense } from 'react';
import { Viewport } from 'next';
import Loading from '@/components/loading';
import { RestaurantSection1, RestaurantSection2 } from '@/components/sections';
import constants from '@/constants';

export const viewport: Viewport = {
  themeColor: '#0C3150',
};
export const metadata = {
  title: `Restaurant | ${constants.brandName}`,
};
export default function Restaurant() {
  return (
    <Suspense fallback={<Loading />}>
      <RestaurantSection1 />
      <RestaurantSection2 />
    </Suspense>
  );
}
