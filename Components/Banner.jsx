import { motion } from 'framer-motion';

const Banner = () => {
  return (
   <div className="relative">
      {/* Animated image with hover zoom */}
      <motion.img 
        src="https://i.ibb.co/pr2J4wnx/sunset-running-girl.jpg"
        alt="sunset banner"
        className="w-full h-[600px] rounded-md mx-auto p-5"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      /> 
      {/* Text content */}
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 px-6 text-center">
        <motion.h1
          className="text-white text-left left-4 relative font-bold text-3xl   leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          Welcome to Sunset Diary 
        </motion.h1>
        <motion.h2
          className="text-white text-left left-8 relative font-bold text-4xl leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 , delay: 0.75}}>
          Where Every Story Shines!
        </motion.h2>
 
        <motion.p
          className="text-gray-50 mt-2 text-left left-14 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.75 }}>
          From Travel Tales to Tech Tips, It’s All Here...
        </motion.p>
      </div>
    </div>
  );
};

export default Banner;
