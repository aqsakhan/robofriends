import React from "react";

const Search = ( {searchChange} ) => {
    return (
        <div>
            <input 
                className="pa3 br3 ba b--green bg-washed-green" 
                type="search" 
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    );
}

export default Search;