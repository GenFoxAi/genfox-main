import { AnimatePresence, motion } from 'framer-motion';
import { FiAlertCircle } from 'react-icons/fi';
import { useState } from 'react';
import { Timeline } from './ui/Timeline';
import whatsapp from '../assets/WhatsApp.svg.webp';
import pic2 from '../assets/apple.png';
import pic3 from '../assets/Google__G__logo.svg.webp';
import pic4 from '../assets/8500323.webp';
import pic5 from '../assets/dataprivacy.webp';
import pic6 from '../assets/machineleaning.webp';
import pic7 from '../assets/dataanalysis.webp';
import pic8 from '../assets/insightsengine.webp';

const SpringModal = ({ isOpen, setIsOpen, content }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-black/50 backdrop-blur-sm fixed inset-0 z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg w-full max-w-lg shadow-xl p-6 text-black"
          >
            {/* Header */}
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center justify-center gap-2">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <img
                    src="/path-to-your-first-icon.png"
                    alt="First Icon"
                    className="w-6 h-6"
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                  <img
                    src="/path-to-your-second-icon.png"
                    alt="Second Icon"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-center text-2xl font-semibold text-gray-900 mb-2">
              {content.title || "Connect Untitled to Linear"}
            </h3>

            {/* Subtitle */}
            <p className="text-center text-gray-600 mb-6">
              {content.description ||
                "Prioritize work based on customer needs and build a tighter feedback loop with your customers."}
            </p>

            {/* Permissions List */}
            <ul className="text-gray-700 mb-6 space-y-2">
              {content.permissions?.map((permission, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="text-indigo-600 w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>{permission}</span>
                </li>
              ))}
            </ul>

            {/* Link and Copy Button */}
            <div className="bg-gray-100 rounded-md p-3 flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm truncate">
                app.untitledui.com/integrations/linear
              </span>
              <button
                onClick={() => navigator.clipboard.writeText(content.link || "app.untitledui.com/integrations/linear")}
                className="text-indigo-600 text-sm font-semibold hover:underline"
              >
                Copy link
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between gap-4">
              <button
                onClick={() => console.log("How it works clicked")}
                className="text-gray-600 hover:text-gray-800 font-medium text-sm"
              >
                How it works
              </button>
              <div className="flex gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={content.onConfirm}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md"
                >
                  Allow access
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


// Timeline Demo Component
export function TimelineDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    description: '',
  });

  const items = [
    {
      id: 1,
      logo: whatsapp,
      title: 'Whatsapp',
      website: 'whatsapp.com',
      description:
        'Integration with WhatsApp for enhanced messaging capabilities. Connect with customers where they are most active.',
      modal: {
        title: 'WhatsApp Integration',
        description:
          'Seamlessly connect your platform with WhatsApp for real-time messaging and customer support.',
      },
    },
    {
      id: 2,
      logo: pic2,
      title: 'Apple',
      website: 'apple.com',
      description:
        'Integrate with Apple services for better user experience. Take advantage of Apple’s robust ecosystem and services.',
      modal: {
        title: 'Apple Integration',
        description:
          'Empower your platform with the capabilities of Apple services, including iCloud and Siri integrations.',
      },
    },
    {
      id: 3,
      logo: pic3,
      title: 'Google',
      website: 'google.com',
      description:
        'Integrate with Google’s ecosystem for productivity. Gain access to tools for streamlined workflows and collaboration.',
      modal: {
        title: 'Google Integration',
        description:
          'Access the power of Google Workspace, Calendar, and Drive for seamless productivity enhancements.',
      },
    },
    {
      id: 4,
      logo: pic4,
      title: 'Outlook',
      website: 'outlook.com',
      description:
        'Enhance your platform with Outlook email services. Utilize professional email and scheduling tools with ease.',
      modal: {
        title: 'Outlook Integration',
        description:
          'Streamline communication with Outlook integration, offering robust email and calendar features.',
      },
    },
  ];
  

  const aiProducts = [
    {
      id: 1,
      image: pic5,
      title: 'Privacy and Security AI',
      description:
        'Enhance your platform security with advanced AI-powered privacy solutions. Stay one step ahead of cyber threats.',
      modal: {
        title: 'Privacy and Security AI',
        description:
          'Advanced AI-powered solutions to ensure data privacy and safeguard your platform from vulnerabilities.',
      },
    },
    {
      id: 2,
      image: pic6,
      title: 'Adaptive Learning System',
      description:
        'Leverage machine learning to create dynamic, adaptive learning experiences. Revolutionize education with personalized AI tools.',
      modal: {
        title: 'Adaptive Learning System',
        description:
          'Use AI-driven adaptive learning systems to provide personalized educational experiences.',
      },
    },
    {
      id: 3,
      image: pic7,
      title: 'Real-Time Data Analytics & Forecasting',
      description:
        'Make data-driven decisions faster with AI-driven real-time analytics and predictions. Turn raw data into actionable insights.',
      modal: {
        title: 'Real-Time Data Analytics',
        description:
          'Leverage AI to analyze data in real-time and gain actionable insights for better decision-making.',
      },
    },
    {
      id: 4,
      image: pic8,
      title: 'AI-Powered Insights Engine',
      description:
        'Unlock deeper insights from your data using cutting-edge AI technologies. Transform data into powerful business strategies.',
      modal: {
        title: 'AI-Powered Insights Engine',
        description:
          'Discover transformative insights using advanced AI technologies for data analysis and business intelligence.',
      },
    },
  ];
  

  const data = [
    {
      title: 'Platform Integration',
      content: (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 p-4'>
          {items.map((item) => (
            <div
              key={item.id}
              className='shadow-md rounded-2xl w-full bg-white border border-1'
            >
              <div className='flex items-center gap-2 px-5 py-2'>
                <img
                  src={item.logo}
                  alt={`${item.title}_logo`}
                  className='h-[65px] p-1'
                />
                <div>
                  <p className='font-semibold text-lg'>{item.title}</p>
                  <p className='text-black/70 text-[11px] font-medium'>
                    {item.website}
                  </p>
                </div>
              </div>
              <p className='text-[14px] py-4 px-5 font-medium text-black/50'>
                {item.description}
              </p>
              {/* <div className='flex items-center justify-end pb-4 px-4'>
                <button
                  onClick={() => {
                    setModalContent(item.modal);
                    setIsOpen(true);
                  }}
                  className='py-2 px-3 font-semibold shadow-md rounded-md text-[14px] border border-1'
                >
                  View Integration
                </button>
              </div> */}
            </div>
          ))}
        </div>
      ),
    },
    {
      title: 'AI Products',
      content: (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 p-4'>
          {aiProducts.map((product) => (
            <div
              key={product.id}
              className='shadow-md rounded-2xl w-full bg-white border border-1'
            >
              <div className='flex items-center gap-2 px-5 py-2'>
                <img
                  src={product.image}
                  alt={`${product.title}_image`}
                  className='h-[65px] p-1'
                />
                <div>
                  <p className='font-semibold text-md'>{product.title}</p>
                </div>
              </div>
              <p className='text-[14px] py-4 px-5 font-medium text-black/50'>
                {product.description}
              </p>
              {/* <div className='flex items-center justify-end pb-4 px-4'>
                <button
                  onClick={() => {
                    setModalContent(product.modal);
                    setIsOpen(true);
                  }}
                  className='py-2 px-3 font-semibold shadow-md rounded-md text-[14px] border border-1'
                >
                  Learn More
                </button>
              </div> */}
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className='w-full'>
      <Timeline data={data} />
      <SpringModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        content={modalContent}
      />
    </div>
  );
}
