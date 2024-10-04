import "../../styles/login.css";
import menShopping from "../../../public/men-shopping.svg";
const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-form">
          <h3 className="login-logo">MineKart</h3>
          <p>Welcome back !!!</p>
          <h1>Sign in</h1>

          <div className="controls-container">
            <div>
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Enter your email" />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className="btn-container">
              <button className="sign-in-btn">Sign In</button>
            </div>
          </div>
          <div className="signup-link">
            <p>
              I dont't have an account? <span>Sing up</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <img src={menShopping} alt="men-shopping" className="men-shopping-img" />
      <div className="bottom-line"></div>
    </div>
  );
};

export default Login;
