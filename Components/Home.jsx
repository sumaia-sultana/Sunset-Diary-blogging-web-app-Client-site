import React from 'react';
import Banner from './Banner';
import Newsletter from '../Pages/Newsletter';
import Recent from '../Pages/Recent';
import MemoryFrame from './MemoryFrame';
import Counter from './Counter';


const Home = () => {
    return (
        <div>
            <Banner />
            
            <Recent/>
            <MemoryFrame/>
            <Newsletter/>
            <Counter/>
        </div>
    );
};

export default Home;