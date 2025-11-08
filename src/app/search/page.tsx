import { Viewport } from 'next';
import constants from '@/constants';
import { SearchSection1 } from '@/components/sections';

export const viewport: Viewport = {
  themeColor: '#0C3150',
};
export const metadata = {
  title: `Search Room | ${constants.brandName}`,
};
export default function Search() {
  return <SearchSection1 />;
}
