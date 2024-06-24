import React, { useState } from 'react';
import './Header.css';
import logo from '../../src/assets/Airbnb_Logo.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import BasicMenu from './Icon';
import SimpleBottomNavigation from './BottomNav';
import MobileSearchBar from './MobileSearchBar';

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className='Navbar'>
      <img src={logo} alt='logo' className='logo' />
      <div className='search-bar'>
        <div className='search-bar-text'>Any Where</div>
        <div className='search-bar-text'>Any Week</div>
        <div className='search-bar-text2'>Add Guests</div>
        <div className='search-icon-div'><SearchRoundedIcon className='search-icon' /></div>
      </div>
      <div className='profile-container'>
        <div className='airbnb-your-home'>Airbnb your home</div>
        <div className='airbnb-your-home'>
          <LanguageRoundedIcon onClick={toggleDropdown} className='dropdown-icon' />
          {dropdownVisible && (
            <div className='dropdown-menu'>
              <a href='https://www.facebook.com/AirbnbIndia' target='_blank' rel='noopener noreferrer'>Facebook</a>
              <a href='https://twitter.com/airbnb_in' target='_blank' rel='noopener noreferrer'>Twitter</a>
              <a href='https://www.instagram.com/airbnb/' target='_blank' rel='noopener noreferrer'>Instagram</a>
            </div>
          )}
        </div>
        <div className='profile-div'>
          <BasicMenu />
        </div>
      </div>
      <MobileSearchBar />
      <SimpleBottomNavigation />
    </div>
  );
}

export default Header;
