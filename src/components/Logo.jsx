import React from 'react';

function Logo({ styleLogo }) {
  return (
    <div>
      <img
        src={require('../assets/PICS_FINDER-logo.png')}
        alt="logo"
        className={`${styleLogo}`}
      />
    </div>
  );
}

export default Logo;
