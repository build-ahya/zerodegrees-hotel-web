'use client';
import { useState } from 'react';
import { FormikProvider, useFormik } from 'formik';
import Image from 'next/image';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import handleError from '@/utils/handleError';
import { Input, Textarea } from './Input';
import ActionButton from '../button';

const COUNTRY_CODE = '+234';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string().required('Enter Your name is required'),
  emailAddress: yup.string().email('Enter a valid email address'),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Enter a valid phone number')
    .required('Phone number is required')
    .min(10, 'Phone Number must be between 10 - 11 digits')
    .max(11, 'Phone Number must be between 10 - 11 digits'),
  message: yup.string(),
});

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: '',
    emailAddress: '',
    phoneNumber: '',
    message: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        setLoading(true);

        const phoneNumber = `${COUNTRY_CODE}${
          values.phoneNumber.startsWith('0')
            ? values.phoneNumber.substring(1)
            : values.phoneNumber
        }`;

        const payload = {
          ...values,
          phoneNumber,
        };
        // const response = await APIService.post(
        //   '/admin/contact/create/enquiry',
        //   payload
        // );
        // if (response.status === 200) {

        // }
        setTimeout(() => {
          toast.success(
            'Your application has been successfully submitted. We look forward to reviewing it.'
          );
          formik.resetForm({ values: initialValues });
          setLoading(false);
        }, 3000);
      } catch (error) {
        const msg = handleError(error);
        toast.error(msg);
      } finally {
        // setLoading(false);
      }
    },
  });

  const { values, errors, touched, handleChange, handleBlur } = formik;

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className='rounded-2xl'
      >
        <Input
          type='text'
          placeholder='Enter your name'
          id='name'
          label='name'
          name='name'
          icon='mdi:user-outline'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          type='text'
          placeholder='Enter your email'
          id='emailAddress'
          label='email'
          name='emailAddress'
          autoComplete='email'
          icon='mdi:email-outline'
          value={values.emailAddress}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className='relative'>
          <Input
            id='phoneNumber'
            label='phoneNumber'
            placeholder='Enter phone Number'
            icon='mdi:phone-outline'
            value={values.phoneNumber}
            error={Boolean(errors.phoneNumber && touched.phoneNumber)}
            message={errors.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className='absolute z-10 top-0 right-0 m-3'>
            <Image
              src='/images/ng-flag.svg'
              className='w-5'
              width={40}
              height={40}
              alt=''
            />
          </div>
        </div>
        <Textarea
          id='message'
          label='message'
          placeholder='Leave a message'
          value={values.message}
          error={Boolean(errors.message && touched.message)}
          message={errors.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={6}
        />
        <ActionButton
          type='submit'
          loading={loading}
          disabled={loading}
          variant='primary'
        >
          Send Message
        </ActionButton>
      </form>
    </FormikProvider>
  );
}
