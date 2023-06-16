import React, { useState } from "react";

const SearchBar = ({ changeVal }) => {




    return (
        <>
            <div>
                <input type="text" name="searchBar" onChange={changeVal} />
            </div>
        </>
    )
}



export default SearchBar;