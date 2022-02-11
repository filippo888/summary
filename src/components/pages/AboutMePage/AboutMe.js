import React from 'react';
import ImageSection from '../../ImageSection';
import {aboutmeObjOne, aboutmeObjTwo, aboutmeObjThree} from './Data';


function AboutMe() {
    return (
      <>
        <ImageSection {...aboutmeObjOne} />
        <ImageSection {...aboutmeObjTwo} />
        <ImageSection {...aboutmeObjThree} />
      </>
    );
  }
  
  export default AboutMe;