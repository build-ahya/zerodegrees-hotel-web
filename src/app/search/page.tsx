import { Suspense } from 'react';
import { Viewport } from 'next';
import Loading from '@/components/loading';
// import { SearchSection1, SearchSection2 } from '@/components/sections';
import dynamic from 'next/dynamic';
import constants from '@/constants';

const SearchSection1 = dynamic(
  () => import('@/components/sections/search/Section1'),
  {
    loading: () => <Loading />,
  }
);

export const viewport: Viewport = {
  themeColor: '#0C3150',
};
export const metadata = {
  title: `Search Room | ${constants.brandName}`,
};
export default function Search() {
  return (
    <Suspense fallback={<Loading />}>
      <SearchSection1 />
      {/* <SearchSection2 /> */}
    </Suspense>
  );
}
