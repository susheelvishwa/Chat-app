import Attach from "../img/Img.png"

const Register = () => {

  

  return (
    <div className="formcontainer">
      <div className="formbox">
        <span className="appname">Pillu Chat</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" placeholder="Disply name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{display:"none"}} type="file" id="file"/>
          <label htmlFor="file">
            <img className="avtar" src={Attach} alt="" />
            <span className="avtar_text">Add your profile picture</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have account? Login</p>
      </div>
    </div>
  );
};

export default Register;
