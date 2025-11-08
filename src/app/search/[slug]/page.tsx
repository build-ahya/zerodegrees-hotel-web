import { Suspense } from 'react';
import { Viewport } from 'next';
import dynamic from 'next/dynamic';
import Empty from '@/components/empty';
import Loading from '@/components/loading';
import rooms from '@/demo/rooms';
import constants from '@/constants';

export const viewport: Viewport = {
  themeColor: '#0C3150',
};

const RoomDetails = dynamic(
  () => import('@/components/sections/search/RoomDetails'),
  {
    loading: () => <Loading />,
  }
);

type tParams = Promise<{ slug: string }>;

export async function generateMetadata(props: { params: tParams }) {
  const { slug } = await props.params;
  const post = rooms.filter((item) => item.slug === slug)[0];

  const publishedAt = new Date(post.createdAt);

  const imageList = [post.images[0]];

  const ogImages = imageList.map((img) => {
    return {
      url: img,
    };
  });

  return {
    title: post.name,
    description: post.summary,
    alternates: {
      canonical: `/search/slug/${slug}`,
    },
    openGraph: {
      title: post.name,
      description: post.summary,
      siteName: constants.brandName,
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: publishedAt,
      images: ogImages,
      authors: [constants.brandName],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.name,
      description: post.summary,
      creator: constants.brandName,
      images: imageList,
    },
  };
}

export default async function Room(props: { params: tParams }) {
  const { slug } = await props.params;

  const room = rooms.find((p) => p.slug === slug);

  if (!room) {
    return <Empty message='no record found' />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <RoomDetails room={room} />
    </Suspense>
  );
}
