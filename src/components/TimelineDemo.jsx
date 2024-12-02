import { Timeline } from './ui/Timeline';
import pic1 from '../assets/Whatsapp.png';
import pic2 from '../assets/apple.png';
import pic3 from '../assets/Googles.png';
import pic4 from '../assets/8500323.webp';
import pic5 from '../assets/dataprivacy.webp';
import pic6 from '../assets/machineleaning.webp';
import pic7 from '../assets/dataanalysis.webp';
import pic8 from '../assets/insightsengine.webp';

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
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
            <img
              src={pic1}
              alt='startup template'
              className='mx-auto w-[220px]  object-cover rounded-md'
            />
            <img
              src={pic2}
              alt='startup template'
              className='mx-auto w-[220px]  object-cover rounded-md'
            />
            <img
              src={pic3}
              alt='startup template'
              className='mx-auto w-[240px]  object-cover rounded-md'
            />
            <img
              src={pic4}
              alt='startup template'
              className='mx-auto w-[240px]  object-cover rounded-md'
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

          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 p-4'>
            <div>
              <img
                src={pic5}
                alt='startup template'
                className='mx-auto w-[220px] object-cover rounded-md'
              />
              <div className='text-center w-fit mx-auto mt-2'>
                <p className='font-medium text-[10px] sm:text-base md:text-[14px] bg-white/30 backdrop-blur-md backdrop-opacity-50 rounded-full px-4 sm:px-6 py-1 sm:py-2 shadow-md border border-white/20'>
                  Privacy and Security AI
                </p>
              </div>
            </div>
            <div>
              <img
                src={pic6}
                alt='startup template'
                className='mx-auto w-[220px] object-cover rounded-md'
              />
              <div className='text-center w-fit mx-auto mt-2'>
                <p className='font-medium text-[10px] text-sm sm:text-base md:text-[14px] bg-white/30 backdrop-blur-md backdrop-opacity-50 rounded-full px-4 sm:px-6 py-1 sm:py-2 shadow-md border border-white/20'>
                  Adaptive Learning System
                </p>
              </div>
            </div>
            <div>
              <img
                src={pic7}
                alt='startup template'
                className='mx-auto w-[240px] object-cover rounded-md'
              />
              <div className='text-center w-fit mx-auto mt-2'>
                <p className='font-medium text-[10px]  sm:text-base md:text-[14px] bg-white/30 backdrop-blur-md backdrop-opacity-50 rounded-full px-4 sm:px-3 py-1 sm:py-2 shadow-md border border-white/20'>
                  Real-Time Data Analytics & Forecasting
                </p>
              </div>
            </div>
            <div>
              <img
                src={pic8}
                alt='startup template'
                className='mx-auto w-[240px] object-cover rounded-md'
              />
              <div className='text-center w-fit mx-auto mt-2'>
                <p className='font-medium text-[10px]  sm:text-base md:text-[14px] bg-white/30 backdrop-blur-md backdrop-opacity-50 rounded-full px-4 sm:px-6 py-1 sm:py-2 shadow-md border border-white/20'>
                  AI-Powered Insights Engine
                </p>
              </div>
            </div>
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
