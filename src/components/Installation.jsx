import React, { useState } from "react";

const Installation = () => {
  const [dropdowns, setDropdowns] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
  });

  const toggleDropdown = (step) => {
    setDropdowns({ ...dropdowns, [step]: !dropdowns[step] });
  };

  const installationSteps = [
    {
      step: "Step - 1: Do you own Minecraft?",
      key: "step1",
      info: (
        <span className="Instructions">
          So you don't actually own Minecraft, and me hosting this server has given you the drive to make such a devious purchase? I feel honored. However, if you want to purchase Minecraft,{' '}
          <a href='https://minecraft.net' className="Link" target='_blank' rel='noopener noreferrer'>click here</a>{' '}
          and follow the steps.
        </span>
      ),
    },
    {
      step: "Step - 2: Do you have CurseForge?",
      key: "step2",
      info: (
        <span className="Instructions">
          I would first love to celebrate that you own an actual copy of minecraft, it's the most purchased game in the entire world but doesn't it still feel special? <br>
          </br>
          <br></br>
          Anyway... Curseforge is a mod installer that will automatically give you a modded edition of minecraft with all the mods nesscarry to join the server which gives me time to build websites to teach you how to jump on the server rather than using a discord server how amazing is that?
          <br></br>
          <br></br>
          Oh wait I was supposed to tell you how to install it now i've just made you read two paragraphs for no reason. Anyway just click on <a href='https://www.curseforge.com/download/app' className="Link" target='_blank' rel='noopener noreferrer'>this link</a> and click on "Standalone" or else you'll have the equivalent of a Yahoo toolbar on your desktop.{' '}
        </span>
      ),
    },
    {
      step: "Step - 3: Do you have the modpack?",
      key: "step3",
      info: (
        <span className="Instructions">
          So regardless of what has happened you have Curseforge installed if you have overwolf installed that is your fault for not reading the instructions! Now time for the fun part!
          <br></br>
          <br></br>
          You'll want to make sure you're looking through the minecraft mod packs first and then search up "All the mods 8". It should be created by the "ATM team". If you somehow installed PixelMon I'm going to be mighty <span> ୧༼ಠ益ಠ༽୨ </span>
        </span>
      ),
    },
    {
      step: "Step - 4: Have you allocated enough RAM?",
      key: "step4",
      info: (
        <span className="Instructions">
          In some cases when booting up the modpack you'll find your minecraft to be a little bit slow, if this is the case you might want to bump up the RAM allocation.
          <br></br>
          <br></br>
          Do bump the Ram allocation load up your minecraft launcher click the "Installations" tab, click the three dots on the right side of the installation and click "edit" after this click the "More options". 
          <br></br>
          <br></br>
          At the bottom of this options page there will be a tab called "JVM arguments" the starting line for this will be "Xmx6g" or something. Change the number in this case 6 to be higher (Try 8gb).
        </span>
      ),
    },
    {
      step: "Step - 5: Have you connected?",
      key: "step5",
      info: (
        <span className="Instructions">
         And last but not least the connection information is the following:
         <br></br>
        <br></br>
          Ip Address: 51.161.215.178:25573
          <br></br>
        <br></br>
        Have fun?
        </span>
      ),
    },
  ];

  return (
    <div className="PageBlock" id="installationStepsSection">
      <h2>Installation Steps</h2>
      <p>
        Here is a step by step process of installing the minecraft mod pack.
      </p>
      {installationSteps.map((stepData, index) => (
        <>
          <div className="InstallationStep" key={stepData.key}>
            <h3>{stepData.step}</h3>
            <p
              className="DropDownArrow"
              onClick={() => toggleDropdown(stepData.key)}
            >
              {dropdowns[stepData.key] ? "▲" : "▼"}
            </p>
          </div>
          <div
            className={`DropdownContent ${dropdowns[stepData.key] ? "open" : ""
              }`}
          >
            {stepData.info}
          </div>
        </>
      ))}
    </div>
  );
};

export default Installation;
