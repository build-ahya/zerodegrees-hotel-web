'use client';
import { BlogCard } from '@/components/cards';
import Container from '@/components/container';
import { useAppSelector } from '@/hooks/useAppSelector';
// import { fetcher } from "@/libs/axios";
import Blog from '@/models/blog';
import { useMemo } from 'react';
import posts from '@/demo/posts';

export default function HomeSection7() {
  const { home } = useAppSelector((state) => state.content);
  //   const { data: posts } = useSWR<Blog[] | null>("/blog/all", fetcher);

  const top3Posts = useMemo(() => {
    const list = posts as Blog[];
    return list.slice(0, 3);
  }, [posts]);

  return (
    <section className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:pt-16 lg:pb-32 mx-auto'>
      <Container maxWidth='max-w-screen-sm'>
        {/* Section Heading */}
        <div className='text-center mb-12'>
          <h1 className='block font-medium text-gray-800 text-2xl md:text-3xl lg:text-4xl text-center'>
            {home.section7.title}
            <span className='text-primary-500'> {home.section7.overline}</span>
          </h1>
          <p className='text-sm text-gray-600'>{home.section7.body}</p>
        </div>
      </Container>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {top3Posts.map((post, index) => {
          if (index === 2) {
            return (
              <BlogCard
                key={post.id}
                post={post}
                layout='cover'
                coverText='text-4xl'
              />
            );
          }
          return <BlogCard key={post.id} post={post} layout='default' />;
        })}
      </div>
    </section>
  );
}
