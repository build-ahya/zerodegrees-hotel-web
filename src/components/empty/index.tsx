import Image from 'next/image';
import Container from '@/components/container';

interface EmptyProps {
  image?: string;
  message?: string;
}

export default function Empty({ image = '/images/empty.svg', message = 'No content available' }: EmptyProps) {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-[400px] py-16">
        <div className="relative w-64 h-64 mb-8">
          <Image
            src={image}
            alt="Empty state"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p className="text-xl text-gray-600 text-center">{message}</p>
      </div>
    </Container>
  );
}
