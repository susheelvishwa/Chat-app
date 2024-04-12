import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Pillu's Chat</span>
      <div className="user">
        <img
          src="https://media.licdn.com/dms/image/C4E03AQEeKMsYbKixtQ/profile-displayphoto-shrink_400_400/0/1639283392842?e=1718236800&v=beta&t=anmWEW-vnKqsfR5TSyL9EC8O--rY3Dv6YJWrJIB8jkM"
          alt=""
        />
        <span>Pillu</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
