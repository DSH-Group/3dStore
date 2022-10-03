import React, { useState }from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


function SearchBar({placeholder, data}) {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = event => {
    const wordEnterd = event.target.value
    const wordFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(wordEnterd.toLowerCase());
    });
    if (wordEnterd === ""){
      setFilteredData([]);
    } else {
      setFilteredData(wordFilter)
    };
  };
  
  return (
    <div className="search">
        <div className="search__input">
            <input type="text" className="search__searchBox" placeholder={placeholder} onChange={handleFilter} />
            <div className="search__icon">
              {filteredData.length === 0 ? (<SearchIcon />) : (<CloseIcon id="clearBtn" />)}
            </div>
        </div>

        { filteredData.length !== 0 && (
        <div className="search__results">
          {filteredData.slice(0,3).map((value, key) => {
            return <div className="search__result-title">
                      <p>{value.title}</p>
                    </div>
            })}
        </div>
        )}
    </div>
  )
}

export default SearchBar