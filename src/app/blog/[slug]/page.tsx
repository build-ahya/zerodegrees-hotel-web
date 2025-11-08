import { Suspense } from 'react';
import { Viewport } from 'next';
import dynamic from 'next/dynamic';
import Empty from '@/components/empty';
import Loading from '@/components/loading';
import posts from '@/demo/posts';
import constants from '@/constants';

export const viewport: Viewport = {
  themeColor: '#0C3150',
};

const BlogDetails = dynamic(
  () => import('@/components/sections/blog/BlogDetails'),
  {
    loading: () => <Loading />,
  }
);

type tParams = Promise<{ slug: string }>;

export async function generateMetadata(props: { params: tParams }) {
  const { slug } = await props.params;
  const post = posts.filter((item) => item.slug === slug)[0];

  const publishedAt = new Date(post.createdAt);

  const imageList = [post.image];

  const ogImages = imageList.map((img) => {
    return {
      url: img,
    };
  });

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `/blog/slug/${slug}`,
    },
    openGraph: {
      title: post.title,
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
      title: post.title,
      description: post.summary,
      creator: constants.brandName,
      images: imageList,
    },
  };
}

export default async function Blog(props: { params: tParams }) {
  const { slug } = await props.params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Empty />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <BlogDetails post={post} />
    </Suspense>
  );
}
