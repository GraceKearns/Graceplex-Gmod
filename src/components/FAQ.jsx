import React, { useState } from 'react';

import './CSS/Regular.css'
import './CSS/Mobile.css'
const FAQ = () => {
  const [dropdowns, setDropdowns] = useState({
    modPack: false,
    mapOfTheWorld: false,
    spiderHate: false,
    portforwardMinecraft: false,
  });

  const toggleDropdown = (step) => {
    setDropdowns({ ...dropdowns, [step]: !dropdowns[step] });
  };

  const faqItems = [
    {
      question: 'Why this mod pack?',
      key: 'modPack',
      answer: (
        <span className="Instructions">
          '¯\\_(ツ)_/¯',
        </span>
      )
    },
    {
      question: 'Can I have a map of the world?',
      key: 'mapOfTheWorld',
      answer: (
        <span className="Instructions">
          '¯\\_(ツ)_/¯',
        </span>
      )
    },
    {
      question: 'Why do you hate spiders?',
      key: 'spiderHate',
      answer: (
        <span className="Instructions">
          '¯\\_(ツ)_/¯',
        </span>
      )
    },
    {
      question: 'How do I portforward my own Minecraft server?',
      key: 'portforwardMinecraft',
      answer: (
        <span className="Instructions">
          '¯\\_(ツ)_/¯',
        </span>
      )
    },
    // ... other questions
  ];

  return (
    <div className="PageBlock " id="faqSection">
      <h2>FAQ</h2>
      <p>Here I will try and answer the basic questions you might want answered!</p>
      {faqItems.map((item) => (
        <>
          <div className="InstallationStep" key={item.key}>
            <h3>{item.question}</h3>
            <p className="DropDownArrow" onClick={() => toggleDropdown(item.key)}>
              {dropdowns[item.key] ? '▲' : '▼'}
            </p>
          </div>
          <div className={`DropdownContent ${dropdowns[item.key] ? 'open' : ''}`}>
            {item.answer}
          </div>
        </>
      ))}
    </div>
  );
};

export default FAQ;
