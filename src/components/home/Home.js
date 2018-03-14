import React from 'react';

import Slide from '../sections/Slide';
import Category from './Categories';
import Product from './Products'
import Quality from './Quality';

const Home = () => {
    return (
        <div className="home">
            <Slide />
            <Category />
            <Product />
            <Quality />
        </div>
    );
};

export default Home;