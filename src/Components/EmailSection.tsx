import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 py-24 gap-4 relative'>

      <div>
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          I'm currently looking for new opportunities, my inbox is always open, 
          whether you have a question or just want to say hi, I'll try my best 
          to get back to you!
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href="https://github.com">
          <div className="outline outline-2 outline-white rounded-full">
            <Image src="/GitHubIcon.png" alt="GitHub Icon" width={28} height={28} />
            </div>
          </Link>
          
          <Link href="https://linkedin.com">
          <div className="outline outline-2 outline-white rounded-full">
            <Image src="/linkedin-logo.png" alt="LinkedIn Icon" width={28} height={28} />
            </div>
          </Link>
        </div>
      </div>

      <div> 
        <form className='flex flex-col'>
            <div className='mb-6'>
          <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>
            Your Email
          </label>
          <input 
            type="email"
            id="email"
            required
            placeholder='johnsmith.eve@gmail.com'
            className=' bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'  />
          </div>

          <div className='mb-6'>
           <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>
            Subject
          </label>
          <input 
            type="text"
            id="subject"
            required
            placeholder='Just say hi!'
            className=' bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'  />
        </div>
        

        <div className='mb-6'>
        <label htmlFor='message'
        className='text-white block text-sm mb-2 font-medium'>
        Message
        </label>
            <textarea name="message" 
            id="message"
            className=' bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            placeholder="Let's talk about...."></textarea>
        </div>
        <button type='submit' 
        className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full '
        >Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;

