import { Timeline } from '@/components/ui/timeline';
import pic1 from '../assets/WhatsApp_Chatbots_in_APAC_130623.webp';
import pic2 from '../assets/apple-fitness-app-feature.jpeg';
import pic3 from '../assets/google.png';
import pic4 from '../assets/outlook.png';
import pic5 from '../assets/data.jpg';
import pic6 from '../assets/adaptive-learning.png';
import pic7 from '../assets/dataanlaysis.jpg';
import pic8 from '../assets/artificial-intelligence-concept-ai-machine-learning-analysis-information-digital-brain_501813-442.avif';

export function TimelineDemo() {
  const data = [
    {
      title: 'Platform Integration',
      content: (
        <div>
          <p className='text-neutral-800 text-xs md:text-sm font-normal mb-8'>
            Experience the power of advanced integrations and intuitive design,
            built to enhance your productivity and streamline your daily tasks
            effortlessly.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <img
              src={pic1}
              alt='startup template'
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]'
            />
            <img
              src={pic2}
              alt='startup template'
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]'
            />
            <img
              src={pic3}
              alt='startup template'
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]'
            />
            <img
              src={pic4}
              alt='startup template'
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'AI Products',
      content: (
        <div>
          <p className='text-neutral-800 text-xs md:text-sm font-normal mb-8'>
            Leverage AI technology to automate tasks, optimize workflows, and
            deliver smarter solutions tailored to your needs.
          </p>

          <div className='grid grid-cols-2 gap-4'>
            <img
              src={pic5}
              alt='hero template'
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]'
            />
            <img
              src={pic6}
              alt='feature template'
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]'
            />
            <img
              src={pic7}
              alt='bento template'
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]'
            />
            <img
              src={pic8}
              alt='cards template'
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className='w-full'>
      <Timeline data={data} />
    </div>
  );
}
