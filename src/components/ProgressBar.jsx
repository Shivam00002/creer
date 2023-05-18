import React, { useState } from 'react';

export const ProgressBar = ({progress}) => {
console.log(progress)


  return (
    <div>
      <div
        style={{
          width: `${progress}%`,
          height: '10px',
          background: 'blue',
          transition: 'width 0.5s',
        }}
      />
     
    </div>
  );
};

export default ProgressBar;
