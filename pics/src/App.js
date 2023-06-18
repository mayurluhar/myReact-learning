
import React, { useState } from "react";
import SearchBar from "./components/searchBar";
import getData from "./api";
import ImageList from "./components/imageList";
import './style.css'

const App = () => {

    const [images, setImages] = useState([]);

    const handleSubmit = async (type) => {
        const result = await getData(type);

        console.log("result", result);

        setImages(result)
    }





    return (
        <>
            <div>
                <SearchBar onSubmit={handleSubmit} />
                <ImageList image={images} />
            </div>
        </>

    )
}

export default App;