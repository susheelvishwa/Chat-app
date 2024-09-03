import Vartika from "../img/Vartika.png"
import shivam from "../img/shivam.png"
import tanu from "../img/tanu.png"
import prachi from "../img/prachi.png"
import shriya from "../img/shriya.png";
import ankit from "../img/ankit.png";
import abhay from "../img/abhay.png";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={shivam} alt="" />
        <div className="userChatInfo">
          <span>Shivam</span>
          <p>Thanku🙌</p>
        </div>
      </div>

      <div className="userChat">
        <img src={Vartika} alt="" />
        <div className="userChatInfo">
          <span>Vartika</span>
          <p>Hii pillu</p>
        </div>
      </div>

      <div className="userChat">
        <img src={tanu} alt="" />
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
        <img src={abhay} alt="" />
        <div className="userChatInfo">
          <span>Abhay</span>
          <p>Hii abhay🥷</p>
        </div>
      </div>

      <div className="userChat">
        <img src={ankit} alt="" />
        <div className="userChatInfo">
          <span>Ankit Lodhi</span>
          <p>Hii jankit😂</p>
        </div>
      </div>

      <div className="userChat">
        <img src={prachi} alt="" />
        <div className="userChatInfo">
          <span>Prachi</span>
          <p>Hii Prachi😢</p>
        </div>
      </div>

      <div className="userChat">
        <img src={shriya} alt="" />
        <div className="userChatInfo">
          <span>shriya</span>
          <p>gm Moti</p>
        </div>
      </div>
    </div>
  );
}



export default Chats
