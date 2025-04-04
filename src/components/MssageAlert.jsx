import React from 'react';

const MssageAlert = ({ alertMessage }) => {
  return (
    <div className='py-2 w-52 border border-yellow-700 rounded-lg shadow-md shadow-yellow-700 text-center m-auto'>
      {alertMessage}
    </div>
  );
};

export default MssageAlert;
