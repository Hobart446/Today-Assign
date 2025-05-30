import React, { useState } from 'react';
import SignInSection from '../sections/inner-pages/SignIn/SignIn/SignInSection';

const LoginDemo = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Today Assign Demo</h1>
          <p className="lead">Click the button below to open the login modal</p>
          <button 
            className="btn btn-success mt-3" 
            onClick={openLoginModal}
          >
            Open Login Modal
          </button>
        </div>
      </div>

      <SignInSection 
        isOpen={isLoginModalOpen} 
        onClose={closeLoginModal} 
      />
    </div>
  );
};

export default LoginDemo; 