import React from 'react';
import { Animator } from '@arwes/react-animator';
import { Puffs } from '@arwes/react-bgs';

const Sandbox = () => {
  return (
    <Animator duration={{ enter: 0.5, exit: 0.5, interval: 3 }}>
      <Puffs
        color='hsla(360, 93%, 62%, 1)'
        quantity={100}
        padding={0}
        // Move to the right.
        xOffset={[10, 50]}
        // Move to the top.
        yOffset={[20, 80]}
        // Change of puff radius.
        radiusOffset={[4, 20]}
        // 1 set per interval animation.
        sets={6}
      />
    </Animator>
  );
};

export default Sandbox;