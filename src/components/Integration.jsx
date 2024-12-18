import whatsappic from '../assets/whatsapp_integration.png';
import TextGenerateEffect from './ui/TextGenerateEffect';
import { motion } from 'framer-motion';
import whatsapp2 from '../assets/Group 26.png';

const words = ['WhatsApp Architecture'];

const Integration = () => {
  return (
    <div>
      <div className='flex  flex-col my-[100px]'>
        <div className='pb-[60px] sm:pb-[100px] text-center'>
          <div className='custom-font text-[22px] whitespace-nowrap sm:text-[40px] text-[#2e2e2e]'>
            <TextGenerateEffect duration={2} filter={false} words={words} />
          </div>
          <motion.p
            className='pt-[20px] font-medium text-[#898d91] sm:text-[18px] text-[11px]'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
          >
           GenFox leverages WhatsApp’s robust architecture to deliver seamless, real-time assistance. <br /> By integrating AI directly into a platform you already use daily
          </motion.p>
        </div>

        <div className=' sm:py-[0px]'>
          <motion.img
            src={whatsapp2}
            className='sm:h-[50%] sm:px-[130px]'
            alt='whatsapp_integration'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2, delay: 0.2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Integration;
