import React from 'react'
import susheel from "../img/susheel.jpg"


const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a User" />
      </div>

      <div className="userChat">
        <img src={susheel} alt="" />
        <div className="userChatInfo">
          <span>Susheel</span>
        </div>
      </div>
    </div>
    

    
  );
}

export default Search
