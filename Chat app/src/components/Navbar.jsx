import Pillu from "../img/Pillu.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Pillu's Chat</span>
      <div className="user">
        <img
          src={Pillu} alt=""
        />
        <span>Pillu</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
