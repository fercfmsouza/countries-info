import React from 'react';
import '../styles/Navbar.scss';

const Navbar = ({ toggleTheme, theme }) => {
  const iconStyle = {
    filter: theme === 'light' ? 'invert(0%)' : 'invert(100%)',
  };

  return (
    <div className='navbar element text'>
      <h1>Where in the world?</h1>
      <button className='nav-mode text element' onClick={toggleTheme}>
        {theme === 'dark' ? (
          <>
            <img
              src={`${process.env.PUBLIC_URL}/images/moon-dark.png`}
              alt='light moon mode'
              style={iconStyle}
            />
            Light mode
          </>
        ) : (
          <>
            <img
              src={`${process.env.PUBLIC_URL}/images/moon-light.png`}
              alt='dark sun mode'
              style={iconStyle}
            />
            Dark mode
          </>
        )}
      </button>
    </div>
  );
};

export default Navbar;
