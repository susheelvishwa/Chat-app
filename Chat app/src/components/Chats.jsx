import Vartika from "../img/Vartika.png"

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQEVy3aZxxUX-Q/profile-displayphoto-shrink_800_800/0/1690162276451?e=1720051200&v=beta&t=KEqQVEIO8-CIiKaCEGxNJ2vUAxxWdgMKVPWtUpQvwt8"
          alt=""
        />
        <div className="userChatInfo">
          <span>Shivam</span>
          <p>Thanku🙌</p>
        </div>
      </div>

      <div className="userChat">
        {/* <img
          src="https://media.licdn.com/dms/image/C4E03AQEeKMsYbKixtQ/profile-displayphoto-shrink_400_400/0/1639283392842?e=1718236800&v=beta&t=anmWEW-vnKqsfR5TSyL9EC8O--rY3Dv6YJWrJIB8jkM"
          alt=""
        /> */}

        <img src={Vartika} alt="" />
        <div className="userChatInfo">
          <span>Vartika</span>
          <p>Hii pillu</p>
        </div>
      </div>

      <div className="userChat">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQEUtHjPXuaJvw/profile-displayphoto-shrink_400_400/0/1710865870581?e=1720051200&v=beta&t=lklReKDm2chqAktwuk5n3uArVPHDTfnVWm2dqYB_10M"
          alt=""
        />
        <div className="userChatInfo">
          <span>Tanu</span>
          <p>All the best tanu✌️</p>
        </div>
      </div>

      <div className="userChat">
        <img
          src="https://avatars.githubusercontent.com/u/76205742?v=4"
          alt=""
        />
        <div className="userChatInfo">
          <span>Sonu</span>
          <p>Happy Birthday Sonu🎁</p>
        </div>
      </div>

      <div className="userChat">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQENJi10eQ3IoQ/profile-displayphoto-shrink_400_400/0/1690393013650?e=1720051200&v=beta&t=-N59kPXjFh90we_oEToo38fepf0JowuFMh2uLLIc_nY"
          alt=""
        />
        <div className="userChatInfo">
          <span>Abhay</span>
          <p>Hii abhay🥷</p>
        </div>
      </div>

      <div className="userChat">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQGA4Vxu5eLtEQ/profile-displayphoto-shrink_400_400/0/1706614398585?e=1720051200&v=beta&t=79NAWeQ6beFUFLPljUso-kTsD3nmRNEhQgBhcXFvh-U"
          alt=""
        />
        <div className="userChatInfo">
          <span>Ankit Lodhi</span>
          <p>Hii jankit😂</p>
        </div>
      </div>

      <div className="userChat">
        <img
          src="https://media.licdn.com/dms/image/D5603AQFmvPjDxdyemw/profile-displayphoto-shrink_400_400/0/1697747146209?e=1720656000&v=beta&t=bKubG5y_eD-VuAD42aj-SMSyREPypDv5PfJWN_Hl5jw"
          alt=""
        />
        <div className="userChatInfo">
          <span>Prachi</span>
          <p>Hii Prachi😢</p>
        </div>
      </div>
    </div>
  );
}



export default Chats
