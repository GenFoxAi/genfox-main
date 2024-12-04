import { Timeline } from './ui/Timeline';
import pic1 from '../assets/Whatsapp.png';
import pic2 from '../assets/apple.png';
import pic3 from '../assets/Google__G__logo.svg.webp';
import pic4 from '../assets/8500323.webp';
import pic5 from '../assets/dataprivacy.webp';
import pic6 from '../assets/machineleaning.webp';
import pic7 from '../assets/dataanalysis.webp';
import pic8 from '../assets/insightsengine.webp';
import whatsapp from '../assets/WhatsApp.svg.webp';

export function TimelineDemo() {
  const items = [
    {
      id: 1,
      logo: whatsapp,
      title: 'Whatsapp',
      website: 'whatsapp.com',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam molestias explicabo nostrum? Est voluptates beatae architecto at, possimus neque in.',
    },
    {
      id: 2,
      logo: pic2,
      title: 'Apple',
      website: 'apple.com',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam molestias explicabo nostrum? Est voluptates beatae architecto at, possimus neque in.',
    },
    {
      id: 3,
      logo: pic3,
      title: 'Google',
      website: 'google.com',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam molestias explicabo nostrum? Est voluptates beatae architecto at, possimus neque in.',
    },
    {
      id: 4,
      logo: pic4,
      title: 'Outlook',
      website: 'outlook.com',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam molestias explicabo nostrum? Est voluptates beatae architecto at, possimus neque in.',
    },
  ];
  
  // AI Products Section
  const aiProducts = [
    {
      id: 1,
      image: pic5,
      title: 'Privacy and Security AI',
      description: 'Enhance your platform security with advanced AI-powered privacy solutions.',
    },
    {
      id: 2,
      image: pic6,
      title: 'Adaptive Learning System',
      description: 'Leverage machine learning to create dynamic, adaptive learning experiences.',
    },
    {
      id: 3,
      image: pic7,
      title: 'Real-Time Data Analytics & Forecasting',
      description: 'Make data-driven decisions faster with AI-driven real-time analytics and predictions.',
    },
    {
      id: 4,
      image: pic8,
      title: 'AI-Powered Insights Engine',
      description: 'Unlock deeper insights from your data using cutting-edge AI technologies.',
    },
  ];

  const data = [
    {
      title: 'Platform Integration',
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-medium text-black/50 mb-8">
            Experience the power of advanced integrations and intuitive design,
            built to enhance your productivity and streamline your daily tasks
            effortlessly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="shadow-md rounded-2xl w-full bg-white border border-1"
              >
                <div className="flex items-center gap-2 px-5 py-2">
                  <div>
                    <img
                      src={item.logo}
                      alt={`${item.title}_logo`}
                      className="h-[65px] p-1"
                    />
                  </div>
                  <div className="float-end">
                    <p className="font-semibold text-lg">{item.title}</p>
                    <p className="text-black/70 text-[11px] font-medium ">{item.website}</p>
                  </div>
                </div>
                <div className="text-[12px] py-2 px-5 font-medium text-black/50">{item.description}</div>
                <div>
                  <div className="flex items-center my-4">
                    <hr className="flex-grow border-t border-gray-300" />
                    <hr className="flex-grow border-t border-gray-300" />
                  </div>
                </div>
                <div className="flex items-center justify-end pb-4 px-4">
                  <button className="py-2 px-3 font-semibold shadow-md rounded-md text-[14px] border border-1">
                    View Integration
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'AI Products',
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Leverage AI technology to automate tasks, optimize workflows, and deliver smarter solutions tailored to your needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
            {aiProducts.map((product) => (
              <div
                key={product.id}
                className="shadow-md rounded-2xl w-full bg-white border border-1"
              >
                <div className="flex items-center gap-2 px-5 py-2">
                  <div>
                    <img
                      src={product.image}
                      alt={`${product.title}_image`}
                      className="h-[65px] p-1"
                    />
                  </div>
                  <div className="float-end">
                    <p className="font-semibold text-md">{product.title}</p>
                  </div>
                </div>
                <div className="text-[12px] py-2 px-5 font-medium text-black/50">{product.description}</div>
                <div>
                  <div className="flex items-center my-4">
                    <hr className="flex-grow border-t border-gray-300" />
                    <hr className="flex-grow border-t border-gray-300" />
                  </div>
                </div>
                <div className="flex items-center justify-end pb-4 px-4">
                  <button className="py-2 px-3 font-semibold shadow-md rounded-md text-[14px] border border-1">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
