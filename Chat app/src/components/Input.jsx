import Attach from "../img/Attach.png"
import Img from "../img/Img.png";

const Input = () => {

  function handleSend() {
    console.log("hello")
  }

  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Attach} alt="" />
        </label>
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button className='sendBtn' onClick={handleSend}>send</button>
      </div>
    </div>
  );
}

export default Input
