import React, { useState } from 'react';

const TabsLoginForm = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('login');
  
  if (!isOpen) return null;
  
  const handleOverlayClick = (e) => {
    if (e.target.className === 'login-modal-overlay') {
      onClose();
    }
  };
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <div className="login-modal-overlay" onClick={handleOverlayClick}>
      <div className="login-modal">
        <div className="login-card">
          <div className="modal-close-btn" onClick={onClose}>
            <span>&times;</span>
          </div>
          
          <div className="tabs-container">
            <div className="tabs">
              <div 
                className={`tab ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => handleTabClick('login')}
              >
                Login
              </div>
              <div 
                className={`tab ${activeTab === 'register-personal' ? 'active' : ''}`}
                onClick={() => handleTabClick('register-personal')}
              >
                Register (Personal)
              </div>
              <div 
                className={`tab ${activeTab === 'register-corporation' ? 'active' : ''}`}
                onClick={() => handleTabClick('register-corporation')}
              >
                Register (Corporation)
              </div>
            </div>
          </div>
          
          <div className="tab-content">
            {activeTab === 'login' && (
              <div className="login-form-wrapper">
                <h2 className="text-center">Welcome Back!</h2>
                
                <form>
                  <div className="form-group">
                    <label>Corp Code</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Enter your corp code"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      placeholder="Enter your password"
                    />
                    <div className="forgot-password">
                      <a href="#">Forgot password?</a>
                    </div>
                  </div>
                  
                  <div className="remember-me">
                    <label>
                      <input type="checkbox" /> Remember me
                    </label>
                  </div>
                  
                  <button type="submit" className="submit-button">Submit</button>
                </form>
              </div>
            )}
            
            {activeTab === 'register-personal' && (
              <div className="login-form-wrapper">
                <h2 className="text-center">Register Personal Account</h2>
                {/* Register personal form fields */}
              </div>
            )}
            
            {activeTab === 'register-corporation' && (
              <div className="login-form-wrapper">
                <h2 className="text-center">Register Corporation Account</h2>
                {/* Register corporation form fields */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsLoginForm; 