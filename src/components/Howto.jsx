
import React, { useState, useEffect } from "react";
import eat from '../img/eat.png'
import sleep from '../img/sleep.png'
import wash from '../img/wash.png'
import wc from '../img/wc.png'
import screen1 from '../img/screen1.jpg'
import screen2 from '../img/screen2.jpg'
import screen3 from '../img/screen3.jpg'
const Howto = ({mode}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const images = [
        screen1,
        screen2,
        screen3
    ];
    const intervalTime = 3000;
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, intervalTime);

        return () => clearInterval(interval);
    }, [images.length, intervalTime]);
    return (
        <div>
            {mode === 'human' ? (
                <div id="HowtoSection">
                    <div class="PageBlock">
                        <div className="slideshow-container">
                            <div className="slides" style={{ transform: `translateX(-${slideIndex * 80}vw)` }}>
                                {images.map((image, index) => (
                                    <img key={index} src={image} alt={`Slide ${index + 1}`} />
                                ))}
                            </div>

                        </div>
                        <div class="InstructionBlocks">
                            <div class="Instruction">
                                <img src={eat} alt="eat" />
                                <p>Complete your tasks for the cause.</p>
                            </div>
                            <div class="Instruction">
                                <img src={sleep} alt="sleep" />
                                <p>Spot anyone being suspicious and not completing their tasks.</p>
                            </div>
                            <div class="Instruction">
                                <img src={wash} alt="wash" />
                                <p>Erradicate all personnel not completing their designated tasks. </p>
                            </div>
                            <div class="Instruction">
                                <img src={wc} alt="wc" />
                                <p>Avoid lethal foreign entities. </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div id="HowtoSectionA">
                    <div class="PageBlock">
                        <div className="slideshow-container">
                            <div className="slides" style={{ transform: `translateX(-${slideIndex * 80}vw)` }}>
                                {images.map((image, index) => (
                                    <img key={index} src={image} alt={`Slide ${index + 1}`} />
                                ))}
                            </div>

                        </div>
                        <div class="InstructionBlocksA">
                            <div class="Instruction">
                                <img src={eat} alt="eat" />
                                <p>Complete your tasks for the cause.</p>
                            </div>
                            <div class="Instruction">
                                <img src={sleep} alt="sleep" />
                                <p>Spot anyone being suspicious and not completing their tasks.</p>
                            </div>
                            <div class="Instruction">
                                <img src={wash} alt="wash" />
                                <p>Erradicate all personnel not completing their designated tasks. </p>
                            </div>
                            <div class="Instruction">
                                <img src={wc} alt="wc" />
                                <p>Avoid lethal foreign entities. </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Howto;