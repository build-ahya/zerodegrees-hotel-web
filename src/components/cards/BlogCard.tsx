'use client';
import Blog from '@/models/blog';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../icon';
import classNames from 'classnames';

export default function BlogCard({
  post,
  layout,
  coverText = 'text-6xl',
}: {
  post: Blog;
  layout: 'default' | 'cover';
  coverText?: string
}) {
  if (layout === 'cover') {
    return (
      <Link
        key={post.id}
        className={`group relative overflow-hidden flex flex-col w-full h-full min-h-[480px] bg-center bg-cover rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition`}
        style={{ backgroundImage: `url('${post.image}')` }}
        href={`/blog/${post.slug}`}
      >
        <div className='flex-auto p-4 md:p-6 max-w-[48rem] z-10'>
          <h3 className={classNames(coverText, 'text-white/90 group-hover:text-white font-bold')}>
            {post.title}
          </h3>
          <p className='max-w-md text-white/80 text-sm mt-8'>{post.summary}</p>
        </div>
        <div className='pt-0 p-4 md:p-6 z-10'>
          <div className='inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70 group-focus:text-white/70'>
            View Blog
            <Icon name='ic:round-arrow-outward' color='text-white' />
          </div>
        </div>
        {/* Overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-primary-800/70 via-primary-800/50 to-transparent'></div>
      </Link>
    );
  }

  return (
    <Link
      key={post.id}
      className='group flex flex-col focus:outline-none'
      href={`/blog/${post.slug}`}
    >
      <div className='relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden'>
        <Image
          className='size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl'
          src={post.image}
          alt=''
          width={1000}
          height={1000}
        />
        <span className='absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-secondary-500 text-white py-1.5 px-3 dark:bg-neutral-900'>
          {post.category}
        </span>
      </div>

      <div className='mt-7'>
        <h3 className='text-xl font-semibold line-clamp-2 text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white'>
          {post.title}
        </h3>
        <p className='my-2 text-sm text-gray-800 dark:text-neutral-200 line-clamp-2'>
          {post.summary}
        </p>
      </div>
    </Link>
  );
}
