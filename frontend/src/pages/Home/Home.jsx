import React, { useState, useRef } from 'react';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
    const [category, setCategory] = useState("All");
    const exploreMenuRef = useRef(null);

    const handleScrollToMenu = () => {
        if (exploreMenuRef.current) {
            exploreMenuRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Header onScrollToMenu={handleScrollToMenu} />
            <div ref={exploreMenuRef}>
                <ExploreMenu setCategory={setCategory} category={category} />
            </div>
            <FoodDisplay category={category} />
            <AppDownload />
        </>
    );
};

export default Home;
