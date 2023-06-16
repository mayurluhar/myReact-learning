import React, { useState } from "react";
import bird from '../src/svg/bird.svg'
import cat from '../src/svg/cat.svg'
import cow from '../src/svg/cow.svg'
import dog from '../src/svg/dog.svg'
import gator from '../src/svg/gator.svg'
import horse from '../src/svg/horse.svg'
import heart from '../src/svg/heart.svg'
import './style.css'

const svgImg = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

const Animal = ({ animalName, keyVal }) => {

    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1)
    }

    return (
        <>
            <div className="animal-show" onClick={handleClick}>
                <p key={keyVal}>
                    <img className="animal" src={svgImg[animalName]} alt="animal" />
                    <img className="heart" src={heart} alt="heart" style={{ width: 10 + 10 * clicks }} />
                </p>
            </div>
        </>
    );
}

export default Animal;