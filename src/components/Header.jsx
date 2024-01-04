import React, { useState, useEffect } from 'react'
import './CSS/Regular.css'
import './CSS/Mobile.css'

const Header = ({ mode }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the screen size is less than 850px
  const checkScreenWidth = () => {
    setIsMobile(window.innerWidth < 850);
  };

  useEffect(() => {
    checkScreenWidth(); // Check the screen size on initial render
    window.addEventListener('resize', checkScreenWidth); // Listen for screen size changes

    return () => {
      window.removeEventListener('resize', checkScreenWidth); // Clean up event listener
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      {mode === "human" ? (
        <div className='HeaderContainer'>
          <div className='HeaderTitleContainer'>
            <h1 className='HeaderTitle'><span className='GTitle'>G</span>racePlex - Morbus</h1>
          </div>
          {isMobile ? ( // Conditionally render the menu drawer for mobile screens
            <div className='MobileMenuIcon' onClick={toggleMenu}>
              {/* Your mobile menu icon (e.g., hamburger icon) */}
              <div className='menu-bar'>&#x25BC;</div>
            </div>
          ) : (

            <nav>
              <ul className='NavItems'>
                <li>
                  <a href="#hubSection">Hub</a>
                </li>
                <li>
                  <a href="#DownloadSection">Download Collection</a>
                </li>
                <li>
                  <a href="#InfoDump">Content Pack</a>
                </li>


              </ul>
            </nav>
          )}
          {isMobile && isMenuOpen && (
            <ul className='MobileNavItems'>
              <li>
                <a href="#hubSection">Hub</a>
              </li>
              <li>
                <a href="#DownloadSection">Download Collection</a>
              </li>
              <li>
                <a href="#InfoDump">Content Pack</a>
              </li>

            </ul>
          )}

        </div>
      ) : (
        <div className='HeaderContainerA'>
          <div className='HeaderTitleContainer'>
            <h1 className='HeaderTitle'><span className='GTitleA'>G</span>racePlex - Morbus</h1>
          </div>
          {isMobile ? ( // Conditionally render the menu drawer for mobile screens
            <div className='MobileMenuIcon' onClick={toggleMenu}>
              {/* Your mobile menu icon (e.g., hamburger icon) */}
              <div className='menu-bar'>&#x25BC;</div>
            </div>
          ) : (

            <nav>
              <ul className='NavItems'>
                <li>
                  <a href="#hubSection">Hub</a>
                </li>
                <li>
                  <a href="#DownloadSection">Download Collection</a>
                </li>
                <li>
                  <a href="#InfoDump">Content Pack</a>
                </li>


              </ul>
            </nav>
          )}
          {isMobile && isMenuOpen && (
            <ul className='MobileNavItems'>
              <li>
                <a href="#hubSection">Hub</a>
              </li>
              <li>
                <a href="#DownloadSection">Download Collection</a>
              </li>
              <li>
                <a href="#InfoDump">Content Pack</a>
              </li>

            </ul>
          )}

        </div>
      )

      }
    </div>
  );
}
export default Header;