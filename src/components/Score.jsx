import React from 'react';
const Score = ({ score }) => {
  return (
    <div className='my-5 flex gap-10 justify-center text-center'>
      <div>
        <div className='text-3xl md:text-7xl'>{score.you}</div>
        <div className='text-2xl'>أنت</div>
      </div>
      <div>
        <div className='text-3xl md:text-7xl'>{score.comp}</div>
        <div className='text-2xl'>الخصم</div>
      </div>
    </div>
  );
};

export default Score;
