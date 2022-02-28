import React from 'react';
import Headers from '../Shared/Headers/Headers';
// import HeadersDropdown from '../Shared/Headers/HeadersDropdown';

import Banner from './Banner/Banner';
import MainService from './MainService/MainService';
import Specialities from './Specialities/Specialities';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            {/* <HeadersDropdown></HeadersDropdown> */}

            <Banner></Banner>
            <MainService></MainService>
            <Specialities></Specialities>
        </div>
    );
};

export default Home;