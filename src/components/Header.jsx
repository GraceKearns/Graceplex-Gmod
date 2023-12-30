import React, { useState } from 'react'
import './CSS/Regular.css'
import './CSS/Mobile.css'
import bulboff from '../img/bulb.png'
import lightbulb from '../img/lightbulb.png'
const Header = () => {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(prevState => !prevState);
    };
    return (
        <div className='HeaderContainer'>
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
                    <li>

                    </li>
                </ul>
                
            </nav>

            <div className='HeaderTitleContainer'>
                <h1 className='HeaderTitle'>GracePlex - Minecraft</h1>
            </div>
            <div className='CoolOptions'>

                <div>
                    <p> </p>
                </div>
            </div>
        </div>
    )
}
export default Header;