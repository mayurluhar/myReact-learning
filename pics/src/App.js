import axios from "axios";
import React, { useState } from "react";
import SearchBar from "./components/searchBar";
import CarList from "./components/carList";

const App = () => {


    const [searchData, setSearchData] = useState('')

    const handleChanges = (e) => {
        e.preventDefault();
        setSearchData(e.target.value)
    }

    console.log(searchData);

    // const getData = async () => {
    //     const responseResult = await axios.get('https://api.unsplash.com/search/photos', {
    //         headers: {
    //             Authorization: `Client-ID ladcGkVdefFSMRcrOt0_yPl3NNHXprR1tJH_hrkAUlU`
    //         },
    //         params: {
    //             query: 'cars',
    //         }
    //     })

    //     return responseResult
    // }

    // console.log(getData());

    return (
        <>
            <div>
                <SearchBar changeVal={handleChanges} />
                <CarList searchValue={searchData} />
            </div>
        </>

    )
}

export default App;