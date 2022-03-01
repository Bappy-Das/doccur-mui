import React from 'react';
import Headers from '../Shared/Headers/Headers';
// import HeadersDropdown from '../Shared/Headers/HeadersDropdown';

import Banner from './Banner/Banner';
import BrowseBySpecilities from './BrowseBySpecilities/BrowseBySpecilities';
import LookingFor from './LookingFor/LookingFor';
import MainService from './MainService/MainService';
import Specialities from './Specialities/Specialities';
import AvailablrFeature from './AvailableFeature/AvailableFeature';
import BestDoctor from './BestDoctor/BestDoctor';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            {/* <HeadersDropdown></HeadersDropdown> */}

            <Banner></Banner>
            <MainService></MainService>
            <Specialities></Specialities>
            <LookingFor></LookingFor>
            <BrowseBySpecilities></BrowseBySpecilities>
            <BestDoctor></BestDoctor>
            <AvailablrFeature></AvailablrFeature>
        </div>
    );
};

export default Home;