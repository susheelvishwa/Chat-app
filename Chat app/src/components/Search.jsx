import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a User" />
      </div>

      <div className="userChat">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQEaimZQdEv61Q/profile-displayphoto-shrink_400_400/0/1711826480785?e=1720051200&v=beta&t=d9ijXut0q5yoTaTOQJEP_gPv13Ny81PKp8nklWGc-Fs"
          alt=""
        />
        <div className="userChatInfo">
          <span>Susheel</span>
        </div>
      </div>
    </div>
    

    
  );
}

export default Search
