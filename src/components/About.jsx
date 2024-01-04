import React, { useState } from "react";
import './CSS/Regular.css'
import './CSS/Mobile.css'
const About = ({mode, handleClick}) => {
  return (
    <div>
    { mode === 'human' ? (
      <div id="aboutSection">
        <div className="PageBlock">
          <h2>
            What is <span className="siteTf" onClick={handleClick}> Morbus? </span>
          </h2>
          <p>The Morbus game mode in Garry's Mod (GMod) is a multiplayer game mode that combines elements of deception, survival, and strategy. It's set on a spaceship where players are divided into two factions: humans and aliens. Humans must work together to complete objectives while trying to identify and eliminate the alien threat. However, some humans are infected with a virus that turns them into aliens, causing distrust and paranoia among the group. The infected humans must keep their identity hidden while spreading the infection among others. The game involves rounds with various objectives for both humans and aliens, leading to tense situations where players must use deduction, teamwork, and combat skills to survive. It's a mix of social deduction games like Werewolf or Mafia, with a survival aspect akin to games like Among Us, all set within the sandbox world of Garry's Mod.</p>
        </div>
      </div>
    ) : (
      <div id="aboutSectionA" className="alien">
        <div className="PageBlock ">
          <h2>
            What is <span className="siteTf" onClick={handleClick}> Morbus? </span>
          </h2>
          <p>The Morbus game mode in Garry's Mod (GMod) is a multiplayer game <span className="alienKill">KILL </span> that combines elements of <span className="alienKill">KILL </span>, <span className="alienKill">KILL </span>, and <span className="alienKill">KILL </span>. It's set on a spaceship where players are divided into two factions: <span className="alienKill">KILL </span> and <span className="alienKill">KILL </span>. Humans must work together to complete objectives while trying to identify and eliminate the alien threat. However, some humans are infected with a virus that turns them into aliens, causing distrust and paranoia among the group. <span className="alienKill">KILL </span> The infected humans must keep their identity hidden while spreading the infection among others. The game involves rounds with various <span className="alienKill">KILL </span> for both humans and aliens, leading to tense situations where players must use <span className="alienKill">KILL </span>, <span className="alienKill">KILL </span>, and <span className="alienKill">KILL </span> to <span className="alienKill">KILL </span>. It's a mix of social deduction games like <span className="alienKill">KILL </span> or <span className="alienKill">KILL </span>, with a survival aspect akin to games like <span className="alienKill">KILL </span>, all set within the sandbox world of <span className="alienKill">KILL </span>.</p>
        </div>
      </div>
    )}
    </div>
  );
};
export default About;
