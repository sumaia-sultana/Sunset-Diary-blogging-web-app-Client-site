import React from 'react';
import Marquee from "react-fast-marquee";

const MemoryFrame = () => {
    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className='text-center text-2xl text-[#db5d89ef] font-bold'>Sunset Dairy Studio Frame </h1>
            <p className='text-gray-500 text-center'>“A glimpse through our window, where every picture tells a story, and every story shapes Sunset Diary”</p>
            <div className="border-2 border-white rounded-xl shadow-lg overflow-hidden bg-white">
                <Marquee pauseOnHover={true} speed={50} gradient={false}>
                    {/* Image Card */}
                    <div className="flex items-center md:gap-4 gap-5 p-4">
                        <div className="border border-white rounded-lg overflow-hidden shadow-md w-60">
                            <img
                                src="https://i.ibb.co/6R5h16R6/ballpoint-1.png"
                                alt="Ballpoint 1"
                                className="w-full h-auto object-cover"/>
                        </div>                      

                        <div className="border border-white rounded-lg overflow-hidden shadow-md w-60">
                            <img
                                src="https://i.ibb.co/HTpH4yY4/note-pencil-cup.jpg"
                                alt="Ballpoint"
                                className="w-auto h-auto object-cover"/>
                        </div>
                        <div className="border border-white rounded-lg overflow-hidden shadow-md w-60">
                            <img
                                src="https://i.ibb.co/sp2z84h1/white-cat-black-eyes-pink-bg.jpg"
                                alt="Ballpoint"
                                className="w-full h-auto object-cover"/>
                        </div>
                         <div className="border border-white rounded-lg overflow-hidden shadow-md w-60">
                            <img
                                src="https://i.ibb.co/6KhQCqs/3d-flower.jpg"
                                alt="Ballpoint 1"
                                className="w-full h-40 object-cover"/>
                        </div>
                        {/* Duplicate for seamless scroll */}
                        <div className="border border-white rounded-lg overflow-hidden shadow-md w-60">
                            <img
                                src="https://i.ibb.co/mFqqXXKy/pink-white-coffee-cup.jpg"
                                alt="Ballpoint 1"
                                className="w-full h-auto object-cover"/>
                        </div>
                        <div className="border border-white rounded-lg overflow-hidden shadow-md w-60">
                            <img
                                src="https://i.ibb.co/hRPpyH1Y/brush.jpg"
                                alt="Ballpoint"
                                className="w-auto h-auto object-cover"/>
                        </div>
                        <div className="border border-white rounded-lg overflow-hidden shadow-md w-60">
                            <img
                                src="https://i.ibb.co/twyNhFtk/ballpoint.png"
                                alt="Ballpoint"
                                className="w-full h-auto object-cover"/>
                        </div>
                        <div className="border border-white rounded-lg overflow-hidden shadow-md w-60">
                            <img
                                src="https://i.ibb.co/fdRsCMwB/camera.jpg"
                                alt="Ballpoint 1"
                                className="w-full h-auto object-cover"/>
                        </div>
                       
                        
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default MemoryFrame;
