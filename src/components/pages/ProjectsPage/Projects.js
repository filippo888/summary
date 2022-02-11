import React from 'react';
import ImageSection from '../../ImageSection';
import Pricing from '../../Pricing';
import {projectsObjOne, projectsObjTwo} from './Data';


function Projects() {
  return (
    <>
      <ImageSection {...projectsObjOne} />
      <ImageSection {...projectsObjTwo} />
      <Pricing/>
      
    </>
  );
}

export default Projects;