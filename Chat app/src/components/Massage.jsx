import React from 'react'
import Vartika from "../img/Vartika.png"

function Massage() {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQEVy3aZxxUX-Q/profile-displayphoto-shrink_800_800/0/1690162276451?e=1720051200&v=beta&t=KEqQVEIO8-CIiKaCEGxNJ2vUAxxWdgMKVPWtUpQvwt8"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello Varika</p>
        {/* <img
          src="https://media.licdn.com/dms/image/D4D03AQEUtHjPXuaJvw/profile-displayphoto-shrink_400_400/0/1710865870581?e=1720051200&v=beta&t=lklReKDm2chqAktwuk5n3uArVPHDTfnVWm2dqYB_10M"
          alt=""
        /> */}
        <img src={Vartika} alt="" />
      </div>
    </div>
  );
}

export default Massage
