import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const handleTabClick = (tab:string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="container flex h-10 w-8/12 text-black leading-6 font-medium text-xl gap-8 ">
        <p
          className={`cursor-pointer pb-2 ${activeTab === 'My Proxies' ? 'text-primary-600 border-b-2 border-primary-600' : ''}`}
          onClick={() => handleTabClick('My Proxies')}
        >
          My Proxies
        </p>
        <p
          className={`cursor-pointer pb-2 ${activeTab === 'Dashboard' ? 'text-primary-600 border-b-2 border-primary-600' : ''}`}
          onClick={() => handleTabClick('Dashboard')}
        >
          Dashboard
        </p>
      </div>

      <div className="border-b border-gray-300"></div>
    </>
  );
};

export default Tabs;
