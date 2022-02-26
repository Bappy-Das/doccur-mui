import React from 'react';
import Headers from '../Shared/Headers/Headers';
// import HeadersDropdown from '../Shared/Headers/HeadersDropdown';

import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            {/* <HeadersDropdown></HeadersDropdown> */}

            <Banner></Banner>
        </div>
    );
};

export default Home;