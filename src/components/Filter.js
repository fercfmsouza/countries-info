import React, { useState, useRef, useEffect } from 'react';
import '../styles/Filter.scss';

const Filter = ({ setFilteredRegion, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const dropdownRef = useRef(null);

  const handleRegionSelection = (region) => {
    setSelectedRegion(region);
    setFilteredRegion(region);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={`filter custom-select ${isOpen ? 'open' : ''} `}
      ref={dropdownRef}
    >
      <div className='selected-option element text' onClick={toggleDropdown}>
        {selectedRegion === 'all' ? 'Filter by Region' : selectedRegion}
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}>&#9662;</span>
      </div>
      {isOpen && (
        <ul className={`options element text ${theme}`}>
          <li className='text' onClick={() => handleRegionSelection('Africa')}>
            Africa
          </li>
          <li
            className='text'
            onClick={() => handleRegionSelection('Americas')}
          >
            Americas
          </li>
          <li className='text' onClick={() => handleRegionSelection('Asia')}>
            Asia
          </li>
          <li className='text' onClick={() => handleRegionSelection('Europe')}>
            Europe
          </li>
          <li className='text' onClick={() => handleRegionSelection('Oceania')}>
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
};

export default Filter;
