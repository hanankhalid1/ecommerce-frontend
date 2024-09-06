// components/FeatureList.tsx

import Image from 'next/image';

type Feature = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    id: 1,
    icon: '/assets/imgs/template/delivery.svg',
    title: 'Free Delivery',
    description: 'From all orders over $10',
  },
  {
    id: 2,
    icon: '/assets/imgs/template/support.svg',
    title: 'Support 24/7',
    description: 'Shop with an expert',
  },
  {
    id: 3,
    icon: '/assets/imgs/template/voucher.svg',
    title: 'Gift voucher',
    description: 'Refer a friend',
  },
  {
    id: 4,
    icon: '/assets/imgs/template/return.svg',
    title: 'Return & Refund',
    description: 'Free return over $200',
  },
  {
    id: 5,
    icon: '/assets/imgs/template/secure.svg',
    title: 'Secure payment',
    description: '100% Protected',
  },
];

const FeatureList = () => {
  return (
    <section className="mb-12 mt-24 lg:mr-40 lg:ml-8">
      <div className="container mx-1">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {features.map((feature) => (
            <li key={feature.id} className="flex  items-center  border border-gray-200 py-1 px-3 hover:border-[#425A8B] hover:bg-blue-100 rounded-md">
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
                  <Image src={feature.icon} alt={feature.title} width={24} height={24} />
                </div>
                <div>
                  <h5 className=" font-bold text-[#425A8B]">{feature.title}</h5>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeatureList;
