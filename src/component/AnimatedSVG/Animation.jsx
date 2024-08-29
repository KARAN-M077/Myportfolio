import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../AnimatedSVG/Animation - 1724912379326.json'

const Animation = () => {
  return <Lottie animationData={animationData} loop={true} />;
};

export default Animation;
