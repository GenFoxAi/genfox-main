import TextGenerateEffectDemo from './TextGenerateEffectDemo';
import iphone from '../assets/phone.png';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      <div className='flex flex-col my-[200px]'>
        <TextGenerateEffectDemo />
        <div className='flex sm:flex-row flex-col-reverse justify-between mt-[10px]'>
          <motion.div
            className='float-end sm:w-[30%] font-medium flex items-end text-center sm:text-left sm:pl-[120px]'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
          >
            <p className='font-medium sm:text-[16px] text-sm'>
              Margaret is an advanced AI assistant that streamlines daily tasks,
              enhances productivity, and offers personalized, intelligent
              support.
            </p>
          </motion.div>
          <div className='py-[105px] sm:py-[0px]'>
            <motion.img
              src={iphone}
              className='sm:h-[500px]'
              alt='phone'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2, delay: 0.2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
