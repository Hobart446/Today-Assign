const SignInSection = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  const handleOverlayClick = (e) => {
    if (e.target.className === 'login-modal-overlay') {
      onClose();
    }
  };
  
  return (
    <div className="login-modal-overlay" onClick={handleOverlayClick}>
      <div className="login-modal">
        <div className="login-card">
          <div className="modal-close-btn" onClick={onClose}>
            <span>&times;</span>
          </div>
          
          <div className="tabs-wrapper">
            <ul className="nav-tabs">
              <li className="active">
                <a href="#login-tab">Login</a>
              </li>
              <li>
                <a href="#register-personal-tab">Register (Personal)</a>
              </li>
              <li>
                <a href="#register-corporation-tab">Register (Corporation)</a>
              </li>
            </ul>
          </div>
          
          <div className="tab-content">
            <div className="tab-pane active" id="login-tab">
              <div className="login-form-wrapper">
                <h2 className="text-center">Welcome Back!</h2>
                
                <form>
                  <div className="mb-4">
                    <label htmlFor="corpCode" className="form-label">Corp Code</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="corpCode" 
                      placeholder="Enter your corp code"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="password" 
                      placeholder="Enter your password"
                    />
                    <div className="text-end mt-1">
                      <a href="#" className="forgot-link">Forgot password?</a>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                    </div>
                  </div>
                  
                  <div className="d-grid">
                    <button type="submit" className="btn btn-success">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSection;
