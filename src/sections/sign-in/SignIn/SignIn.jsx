const SignIn = () => {
  return (
    <div className="login-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="login-wrapper">
              <div className="text-center mb-4">
                <img src="/image/icons/today-assign-logo.svg" alt="Today Assign" className="logo" />
              </div>
              
              <h1 className="text-center mb-2">Welcome back</h1>
              <p className="text-center mb-5">Enter your account details below to sign in</p>
              
              <div className="login-form">
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password*</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="typepassword"
                  />
                </div>
                
                <div className="d-flex justify-content-between mb-4">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <a href="#" className="forgot-link">Forget password?</a>
                </div>
                
                <button type="submit" className="btn btn-login w-100">Login Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
