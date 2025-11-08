'use client';
import { useAppSelector } from '@/hooks/useAppSelector';
import Container from '@/components/container';
import { ContactForm } from '@/components/forms';
import Icon from '@/components/icon';

export default function ContactSection2() {
  const { contact } = useAppSelector((state) => state.content);

  const address = contact.section2?.carousel?.find(
    (item) => item.subtitle === 'Our Address'
  );

  return (
    <section className='py-16 bg-gray-100'>
      <Container>
        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <h2
              className='text-3xl font-bold text-gray-900 mb-6'
              data-aos='fade-up'
            >
              {contact.section2.title}
            </h2>
            <p
              className='text-sm text-gray-600 mb-8'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              {contact.section2.body}
            </p>
            <div className='space-y-6' data-aos='fade-up' data-aos-delay='200'>
              {contact?.section2?.carousel?.map((info, index) => (
                <div key={index} className='flex items-start'>
                  <div className='flex-shrink-0 mr-4'>
                    <Icon
                      name={info.image}
                      size={24}
                      color='text-primary-600'
                    />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      {info.title}
                    </h3>
                    <p className='text-gray-600'>{info.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className='bg-white rounded-lg shadow-lg p-8'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              Leave us a message
            </h3>
            <ContactForm />
          </div>
        </div>

        <div className='my-6 rounded-2xl border border-gray-200 bg-white p-7 group transition-all duration-500'>
          <h5 className='text-gray-900 text-xl font-semibold leading-8 mb-3 transition-all duration-500 group-hover:text-gray-800'>
            Our Location
          </h5>

          <iframe
            src={address?.href}
            width='100%'
            height='350'
            loading='lazy'
          ></iframe>
        </div>
      </Container>
    </section>
  );
}
