const Login = () => {
  return (
    <div className="formcontainer">
      <div className="formbox">
        <span className="appname">Pillu's Chat</span>
        <span className="title">Login</span>
        <form action="">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
        </form>
        <p>You don't have account? Register</p>
      </div>
    </div>
  );
};

export default Login;
