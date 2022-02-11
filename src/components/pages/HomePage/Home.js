import React from 'react';
import HeroSection from '../../HeroSection';
import ImageSection from '../../ImageSection';
import { homeObjOne, homeObjTwo, homeObjThree} from './Data';


function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <ImageSection {...homeObjTwo} />
      <ImageSection {...homeObjThree} />
    </>
  );
}

export default Home;