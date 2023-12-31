import React, { useState,useEffect } from 'react'
import './CSS/Regular.css'
import './CSS/Mobile.css'
import bulboff from '../img/bulb.png'
import lightbulb from '../img/lightbulb.png'
const Header = () => {
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
        <div className='HeaderContainer'>
             <div className='HeaderTitleContainer'>
                <h1 className='HeaderTitle'>GracePlex - Minecraft</h1>
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
                  <a href="#aboutSection">About</a>
                </li>
                <li>
                  <a href="#requirementsSection">Requirements</a>
                </li>
                <li>
                  <a href="#installationStepsSection">Installation Steps</a>
                </li>
                <li>
                  <a href="#faqSection">FAQ</a>
                </li>
                <li>{/* Add more navigation items if needed */}</li>
              </ul>
            </nav>
          )}
        
          {/* Mobile menu drawer */}
          
          {isMobile && isMenuOpen && (
            <ul className='MobileNavItems'>
              <li>
                <a href="#hubSection">Hub</a>
              </li>
              <li>
                <a href="#aboutSection">About</a>
              </li>
              <li>
                <a href="#requirementsSection">Requirements</a>
              </li>
              <li>
                <a href="#installationStepsSection">Installation Steps</a>
              </li>
              <li>
                <a href="#faqSection">FAQ</a>
              </li>
              {/* Add more mobile menu items if needed */}
            </ul>
          )}
            
            </div>
      );
}
export default Header;