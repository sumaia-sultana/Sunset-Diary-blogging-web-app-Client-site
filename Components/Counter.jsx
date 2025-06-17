 import React from 'react';
import CountUp from 'react-countup';
 
 const Counter = () => {
    return (
        <div className="my-10 px-5">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
        <span className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></span>
        Our Achievements
      </h1>
       

      {/* Card Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

        {/* Card 1 */}
        <div className="bg-[#e9f6d6] rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
          <h2 className="text-4xl font-bold text-gray-700">
            <CountUp enableScrollSpy start={0} end={24000} duration={2} />+
          </h2>
          <p className="text-gray-600 mt-1">Total Blog</p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#e7ecf8] rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
          <h2 className="text-4xl font-bold text-gray-700">
            <CountUp enableScrollSpy start={0} end={70} duration={2} />%
          </h2>
          <p className="text-gray-600 mt-1">Share rate</p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#fde3e3] rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
          <h2 className="text-4xl font-bold text-gray-700">
            <CountUp enableScrollSpy start={0} end={8000} duration={2} />+
          </h2>
          <p className="text-gray-600 mt-1">Subscriber</p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#fff4cc] rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
          <h2 className="text-4xl font-bold text-gray-700">
            <CountUp enableScrollSpy start={0} end={60} duration={2} />
          </h2>
          <p className="text-gray-600 mt-1">Active Blogger</p>
        </div>

      </div>
    </div>
    );
 };
 
 export default Counter;