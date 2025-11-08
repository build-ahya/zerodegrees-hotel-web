'use client';
import Container from '@/components/container';
import posts from '@/demo/posts';
import { BlogCard } from '@/components/cards';

export default function BlogSection2() {
  const highlightedPosts = posts.filter((post) => post.highlighted).slice(0, 2);
  const regularPosts = posts.filter((post) => !post.highlighted);

  return (
    <section className='py-16 bg-gray-100'>
      <Container>
        <div className='mb-20'>
        {highlightedPosts.map((post, index) => (
          <BlogCard key={post.slug} post={post} layout='cover' coverText='text-6xl' />
        ))}
        </div>

        {/* Regular Posts Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {regularPosts.map((post) => (
            <BlogCard key={post.slug} post={post} layout='default' />
          ))}
        </div>
      </Container>
    </section>
  );
}
