import React, { useState } from "react";
import Animal from "./animal";
import './style.css'

const App = () => {

    const [animalList, setAnimalList] = useState([]);

    const getAnimal = () => {
        const animalArray = ["bird", "cow", 'horse', 'cat', 'dog', 'gator']

        return animalArray[Math.floor(Math.random() * animalArray.length)]
    }

    const handleClick = () => {

        setAnimalList([...animalList, getAnimal()])

    }

    const renderAnimal = animalList.map((data, index) => {
        return <Animal animalName={data} key={index} />
    })

    return (
        <>
            <p>App page</p>
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderAnimal}</div>
        </>
    );
}

export default App;