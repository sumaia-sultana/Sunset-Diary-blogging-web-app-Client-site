 import React from 'react';
import CountUp from 'react-countup';
 
 const Counter = () => {
    return (
       <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-5">
                <div className="flex items-center justify-center gap-4 mb-14">
                    <span className="w-4 h-4 bg-pink-400 rounded-full animate-pulse shadow-[0_0_12px_rgba(244,114,182,0.8)]"></span>
                    <h1 className="text-4xl font-bold text-gray-800">
                        Our Achievements
                    </h1>
                </div>

                {/* Card Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Card 1 */}
                    <div className="bg-[#e9f6d6] rounded-3xl p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <h2 className="text-5xl font-extrabold text-gray-800 mb-3">
                            <CountUp enableScrollSpy start={0} end={24000} duration={2.5} separator="," />+
                        </h2>
                        <p className="text-gray-600 font-semibold text-lg uppercase tracking-wider">Total Blogs</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#e7ecf8] rounded-3xl p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <h2 className="text-5xl font-extrabold text-gray-800 mb-3">
                            <CountUp enableScrollSpy start={0} end={70} duration={2.5} />%
                        </h2>
                        <p className="text-gray-600 font-semibold text-lg uppercase tracking-wider">Share Rate</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#fde3e3] rounded-3xl p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <h2 className="text-5xl font-extrabold text-gray-800 mb-3">
                            <CountUp enableScrollSpy start={0} end={8000} duration={2.5} separator="," />+
                        </h2>
                        <p className="text-gray-600 font-semibold text-lg uppercase tracking-wider">Subscribers</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#fff4cc] rounded-3xl p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <h2 className="text-5xl font-extrabold text-gray-800 mb-3">
                            <CountUp enableScrollSpy start={0} end={60} duration={2.5} />
                        </h2>
                        <p className="text-gray-600 font-semibold text-lg uppercase tracking-wider">Active Bloggers</p>
                    </div>
                </div>
            </div>
        </div>
    );
 };
 
 export default Counter;