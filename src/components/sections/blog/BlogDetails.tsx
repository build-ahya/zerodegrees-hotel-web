'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/container';
// import HtmlWrapper from '@/components/html';
import Icon from '@/components/icon';
import Blog from '@/models/blog';
import HtmlWrapper from '@/components/html';

interface BlogDetailsProps {
  post: Blog;
}

export default function BlogDetails({ post }: BlogDetailsProps) {
  const [likes, setLikes] = useState(post.likes.length);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
    // Here you would typically send a request to your backend to update the likes
  };

  return (
    <>
      <section className='relative h-[60vh]'>
        <Image
          src={post.image}
          alt={post.title}
          layout='fill'
          objectFit='cover'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-b from-primary-800/70 via-primary-800/50 to-transparent'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/70'></div>

        <Container className='absolute inset-0 flex items-end'>
          <div className='mb-8 space-y-2 text-white'>
            <div className='max-w-3xl mx-auto'>
              <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                {post.title}
              </h1>
            </div>
            <div className='flex items-center text-gray-300 mb-2'>
              <Icon name='mdi:calendar' size={20} color='mr-2' />
              <time dateTime={new Date(post.createdAt).toISOString()}>
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className='mx-2'>•</span>
              <Icon name='mdi:tag' size={20} color='mr-2' />
              <span>{post.category}</span>
            </div>
          </div>
        </Container>
      </section>

      <Container maxWidth='max-w-screen-lg' className='py-16'>
        <div>
          <HtmlWrapper data={post.content} />
        </div>

        <footer className='border-t border-gray-200 pt-8 mt-8'>
          <div className='flex items-center justify-between mb-8'>
            <div className='flex items-center space-x-4'>
              <button
                onClick={handleLike}
                className='flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors'
              >
                <Icon name='mdi:heart' size={24} />
                <span>{likes} likes</span>
              </button>
              <button className='flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors'>
                <Icon name='mdi:share' size={24} />
                <span>Share</span>
              </button>
            </div>
            <div className='flex space-x-4'>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className='bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className='flex flex-col'>
            <Link
              href='/blog'
              className='text-primary-600 hover:text-primary-700 transition-colors'
            >
              ← Back to all posts
            </Link>
          </div>
        </footer>
      </Container>
    </>
  );
}
