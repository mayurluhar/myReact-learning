import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {


    const [searchData, setSearchData] = useState('')

    const handleChanges = (e) => {
        e.preventDefault();
        setSearchData(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(searchData)
    }


    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input className="search-input" placeholder="Enter image type" type="text" name="searchBar" onChange={handleChanges} />
                </form>
            </div>
        </>
    )
}



export default SearchBar;