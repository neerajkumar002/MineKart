import "../../styles/auth css/register.css";

const Register = () => {
  return (
    <div className="register-wrapper">
      <div className="register-container">
        <div className="register-form">
          <h2>Welcome to MineKart</h2>
          <p>Register to Minekart</p>

          <div className="controls-container">
           
            <div>
              <label htmlFor="fullname">Full Name</label>
              <input type="text" id="fullname" name="lastName" placeholder="Enter Your Full Name" />
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Enter Your Email Address" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" placeholder="Enter your password" />
            </div>
            <div className="btn-container">
              <button className="register-in-btn">Register</button>
            </div>
          </div>
          <div className="register-link">
            <p>
              Already have an Customer? <span>Login</span>{" "}
            </p>
          </div>
        </div>
      </div>
      {/* <img src={menShopping} alt="men-shopping" className="men-shopping-img" /> */}
      <div className="bottom-line"></div>
    </div>
  );
};

export default Register;
