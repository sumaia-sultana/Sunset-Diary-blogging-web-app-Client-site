import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Camera, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
 

const Banner = () => {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center bg-[#0B1120] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1495474472204-518605f5d8f2?w=1920&q=80"
          alt="Sunset background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/90 to-[#0B1120]/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 w-full relative z-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content (Spans 7 cols) */}
          <div className="lg:col-span-7">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#FF9E80] font-bold tracking-widest text-sm uppercase mb-4"
            >
              Sunset Diary Platform
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Beautiful stories and daily inspiration backed by community passion.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed"
            >
              Sunset Diary is a vibrant blogging platform delivering personal tales, travel guides, and lifestyle inspiration alongside creative photography through specialized community categories.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link to="/allblogs" className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#FF5F7E] to-[#FF9E80] text-white font-bold hover:shadow-lg hover:shadow-[#FF5F7E]/30 transition-all flex items-center gap-2">
                EXPLORE BLOGS <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/register" className="px-8 py-3.5 rounded-lg border border-white/30 text-white font-bold hover:bg-white/10 transition-all">
                JOIN COMMUNITY
              </Link>
            </motion.div>
          </div>

          {/* Right Content (Spans 5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#151E32]/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
              <h3 className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-6">
                Featured Categories
              </h3>
              
              <div className="space-y-4">
                {/* Item 1 */}
                <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-[#FF5F7E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF5F7E]/20 transition-colors border border-[#FF5F7E]/20">
                    <BookOpen className="w-5 h-5 text-[#FF5F7E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">Personal Stories</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Authentic experiences, life lessons, and daily reflections.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-[#FF9E80]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF9E80]/20 transition-colors border border-[#FF9E80]/20">
                    <Camera className="w-5 h-5 text-[#FF9E80]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">Travel & Photography</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      World exploration, destination guides, and visual stories.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-[#FFC75F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFC75F]/20 transition-colors border border-[#FFC75F]/20">
                    <Lightbulb className="w-5 h-5 text-[#FFC75F]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">Ideas & Inspiration</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Creative thoughts, lifestyle tips, and new perspectives.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-sm mt-6 leading-relaxed">
                A central hub for readers and writers to connect, share, and grow together in a supportive environment.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
