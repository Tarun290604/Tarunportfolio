import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-12'>
      <motion.h1
      whileInView={{opacity:1,y:0}} 
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
      className='my-12 text-center text-5xl font-bold'>
        Get in Touch
      </motion.h1>
      <motion.p
      whileInView={{opacity:1,y:0}} 
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}} className='text-center text-lg mb-8 max-w-2xl mx-auto'>
        I'm open to new opportunities and collaborations. If you'd like to discuss a project or simply say hello, feel free to reach out!
      </motion.p>
      <div className='text-center'>
        <motion.p
        whileInView={{opacity:1,x:0}} 
        initial={{opacity:0,x:-100}}
         className='my-6'>
          {CONTACT.address}
        </motion.p>
        <motion.p
        whileInView={{opacity:1,x:0}} 
        initial={{opacity:0,x:-100}}
         className='my-6 '>
          {CONTACT.phoneNo}
        </motion.p>
        <motion.p
        whileInView={{opacity:1,x:0}} 
        initial={{opacity:0,x:-100}}
         className='my-6'>
          <a href={`mailto:${CONTACT.email}`} className='border-b-2 border-neutral-900 hover:border-neutral-600 transition-all duration-300 ml-2'>
            {CONTACT.email}
          </a>
        </motion.p>
      </div>
    </div>
  );
}

export default Contact;
