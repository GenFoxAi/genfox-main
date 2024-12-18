'use client';

import { useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import robo from '../assets/robo.png';
import { motion } from 'framer-motion';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contactno: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?[0-9]{7,15}$/;

    if (!formData.email || !emailPattern.test(formData.email)) {
      setStatus('Invalid email address');
      return;
    }
    if (!formData.contactno || !phonePattern.test(formData.contactno)) {
      setStatus('Invalid phone number');
      return;
    }

    setStatus('Submitting...');

    const googleFormEndpoint =
      'https://docs.google.com/forms/d/e/1FAIpQLSdVxXUIc7aEOUfpC4IUdXAp3lxziCS13RPsFj3z9QJfeDOXBg/formResponse';

    const body = new URLSearchParams();
    body.append('entry.538181747', formData.firstname);
    body.append('entry.374034099', formData.lastname);
    body.append('entry.910439913', formData.email);
    body.append('entry.25111992', formData.contactno);

    try {
      await fetch(googleFormEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body,
      });
      setStatus('Success! Your response has been submitted.');
      setFormData({ firstname: '', lastname: '', email: '', contactno: '' });
    } catch (error) {
      setStatus('Failed to submit. Please try again.');
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className='max-w-5xl my-[100px] w-full mx-auto flex flex-col md:flex-row items-center rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black'
    >
      {/* Form Section */}
      <div className='w-full md:w-2/3 '>
        <form className='my-8' onSubmit={handleSubmit}>
          <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
            Contact Us
          </h2>
          <p className='text-neutral-600 text-sm max-w-sm mt-2 mb-12 dark:text-neutral-300'>
            We’d love to hear from you! Please fill out the form below to get in
            touch with us.
          </p>
          <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
            <LabelInputContainer>
              <Label htmlFor='firstname'>First name</Label>
              <Input
                id='firstname'
                placeholder='John'
                type='text'
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor='lastname'>Last name</Label>
              <Input
                id='lastname'
                placeholder='Doe'
                type='text'
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className='mb-4'>
            <Label htmlFor='email'>Email Address</Label>
            <Input
              id='email'
              placeholder='example@domain.com'
              type='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className='mb-4'>
            <Label htmlFor='contactno'>Contact Number</Label>
            <Input
              id='contactno'
              placeholder='+1234567890'
              type='text'
              value={formData.contactno}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <button
            className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
            type='submit'
          >
            Submit &rarr;
            <BottomGradient />
          </button>
          {status && <p className='mt-4 text-sm'>{status}</p>}
        </form>
      </div>

      {/* Image Section */}
      <div className='w-full sm:block hidden md:w-3/4 p-4 flex justify-center items-center'>
        <img
          src={robo}
          alt='Contact Us'
          className='rounded-lg shadow-md h-[500px] w-[800px] object-cover'
        />
      </div>
    </motion.div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
      <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};
