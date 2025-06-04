import React, { useState, useEffect } from 'react';
import './TabsLoginForm.css';

const TabsLoginForm = ({ isOpen, onClose, initialTab = 'login' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [step, setStep] = useState(1);
  const [corpCode, setCorpCode] = useState("");
  const [adminName, setAdminName] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminPasswordConfirm, setAdminPasswordConfirm] = useState("");
  const [corpName, setCorpName] = useState("");
  const [corpAddress, setCorpAddress] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  
  useEffect(() => {
    setActiveTab(initialTab);
    setStep(1);
    setRegistrationComplete(false);
    setErrors({});
  }, [initialTab]);
  
  if (!isOpen) return null;
  
  const handleOverlayClick = (e) => {
    if (e.target.className === 'login-modal-overlay') {
      onClose();
    }
  };
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setStep(1);
    setRegistrationComplete(false);
    setErrors({});
  };

  const validateStep = (currentStep) => {
    const newErrors = {};
    
    switch(currentStep) {
      case 1:
        if (!corpCode.trim()) {
          newErrors.corpCode = "企业代码不能为空";
        }
        break;
      case 2:
        if (!adminName.trim()) {
          newErrors.adminName = "管理员用户名不能为空";
        }
        if (!adminPassword) {
          newErrors.adminPassword = "密码不能为空";
        } else if (adminPassword.length < 6) {
          newErrors.adminPassword = "密码长度至少为6位";
        }
        if (!adminPasswordConfirm) {
          newErrors.adminPasswordConfirm = "请确认您的密码";
        } else if (adminPassword !== adminPasswordConfirm) {
          newErrors.adminPasswordConfirm = "两次输入的密码不一致";
        }
        break;
      case 3:
        if (!corpName.trim()) {
          newErrors.corpName = "企业名称不能为空";
        }
        if (!corpAddress.trim()) {
          newErrors.corpAddress = "企业地址不能为空";
        }
        if (!contactEmail.trim()) {
          newErrors.contactEmail = "联系邮箱不能为空";
        } else if (!/\S+@\S+\.\S+/.test(contactEmail)) {
          newErrors.contactEmail = "请输入有效的邮箱地址";
        }
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      if (step < 3) {
        setStep(step + 1);
      } else {
        // Submit form
        setRegistrationComplete(true);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
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
                登录
              </div>
              <div 
                className={`tab ${activeTab === 'register-personal' ? 'active' : ''}`}
                onClick={() => handleTabClick('register-personal')}
              >
                注册 (个人)
              </div>
              <div 
                className={`tab ${activeTab === 'register-corporation' ? 'active text-success' : ''}`}
                onClick={() => handleTabClick('register-corporation')}
              >
                注册 (企业)
              </div>
            </div>
          </div>
          
          <div className="tab-content">
            {activeTab === 'login' && (
              <div className="login-form-wrapper">
                <h2 className="text-center mb-4">欢迎回来！</h2>
                
                <form>
                  <div className="form-group">
                    <label>企业代码</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="请输入企业代码"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>邮箱</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="请输入邮箱地址"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>密码</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      placeholder="请输入密码"
                    />
                    <div className="forgot-password">
                      <a href="#">忘记密码？</a>
                    </div>
                  </div>
                  
                  <div className="remember-me">
                    <label>
                      <input type="checkbox" /> 记住我
                    </label>
                  </div>
                  
                  <button type="submit" className="submit-button">提交</button>
                </form>
              </div>
            )}
            
            {activeTab === 'register-personal' && (
              <div className="login-form-wrapper">
                <h2 className="text-center mb-4">注册个人账户</h2>
                <form>
                  <div className="form-group">
                    <label>姓名</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div className="form-group">
                    <label>邮箱地址</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                  <div className="form-group">
                    <label>密码</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="请输入密码"
                    />
                  </div>
                  <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="terms" />
                    <label className="form-check-label" htmlFor="terms">
                      我同意<span className="text-primary">条款</span>和<span className="text-primary">隐私政策</span>
                    </label>
                  </div>
                  <button type="submit" className="submit-button">创建账户</button>
                </form>
              </div>
            )}
            
            {activeTab === 'register-corporation' && !registrationComplete && (
              <div className="login-form-wrapper">
                <h2 className="text-center">创建账户</h2>
                
                {/* Progress Steps */}
                <div className="progress-steps">
                  <div className="step-labels">
                    <div className={`step-label ${step >= 1 ? 'text-success' : ''}`}>企业代码</div>
                    <div className={`step-label ${step >= 2 ? 'text-success' : ''}`}>账户信息</div>
                    <div className={`step-label ${step >= 3 ? 'text-success' : ''}`}>企业信息</div>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-track"></div>
                    <div className="progress-line" style={{ width: `${(step - 1) * 50}%` }}></div>
                    <div className={`progress-circle ${step >= 1 ? 'completed' : ''}`}></div>
                    <div className={`progress-circle ${step >= 2 ? 'completed' : step === 1 ? 'active' : ''}`}></div>
                    <div className={`progress-circle ${step >= 3 ? 'completed' : step === 2 ? 'active' : ''}`}></div>
                  </div>
                </div>

                {/* Step Content */}
                {step === 1 && (
                  <div className="step-content">
                    <div className="form-group">
                      <label className="form-label">自定义企业代码：</label>
                      <input 
                        type="text" 
                        className={`form-control ${errors.corpCode ? 'is-invalid' : ''}`}
                        value={corpCode}
                        onChange={(e) => setCorpCode(e.target.value)}
                        placeholder="请输入企业代码"
                      />
                      {errors.corpCode && <div className="invalid-feedback">{errors.corpCode}</div>}
                      {corpCode && !errors.corpCode && (
                        <div className="text-success mt-2 small">
                          <span>企业代码可用。</span><br />
                          <span>这是您公司未来使用的专属编号。</span>
                        </div>
                      )}
                    </div>
                    <div className="btn-container">
                      <div></div> {/* 空的div用于占位，保持按钮右对齐 */}
                      <button 
                        className="btn btn-success btn-block" 
                        onClick={handleNext}
                        type="button"
                        style={{ maxWidth: '120px' }}
                      >
                        下一步
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="step-content">
                    <div className="form-group">
                      <label>管理员用户名：</label>
                      <input 
                        type="text" 
                        className={`form-control ${errors.adminName ? 'is-invalid' : ''}`}
                        value={adminName}
                        onChange={(e) => setAdminName(e.target.value)}
                        placeholder="请输入管理员用户名"
                      />
                      {errors.adminName && <div className="invalid-feedback">{errors.adminName}</div>}
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>管理员密码：</label>
                          <div className="password-field">
                            <input 
                              type={showPassword ? "text" : "password"} 
                              className={`form-control ${errors.adminPassword ? 'is-invalid' : ''}`}
                              value={adminPassword}
                              onChange={(e) => setAdminPassword(e.target.value)}
                              placeholder="请输入密码"
                            />
                            <button 
                              className="password-toggle" 
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                              </svg>
                            </button>
                          </div>
                          {errors.adminPassword && <div className="invalid-feedback d-block">{errors.adminPassword}</div>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>重新输入管理员密码：</label>
                          <div className="password-field">
                            <input 
                              type={showConfirmPassword ? "text" : "password"} 
                              className={`form-control ${errors.adminPasswordConfirm ? 'is-invalid' : ''}`}
                              value={adminPasswordConfirm}
                              onChange={(e) => setAdminPasswordConfirm(e.target.value)}
                              placeholder="请再次输入密码"
                            />
                            <button 
                              className="password-toggle" 
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                              </svg>
                            </button>
                          </div>
                          {errors.adminPasswordConfirm && <div className="invalid-feedback d-block">{errors.adminPasswordConfirm}</div>}
                        </div>
                      </div>
                    </div>
                    <div className="btn-container">
                      <button 
                        className="btn btn-success btn-block" 
                        onClick={handleBack}
                        type="button"
                        style={{ maxWidth: '120px' }}
                      >
                        上一步
                      </button>
                      <button 
                        className="btn btn-success btn-block" 
                        onClick={handleNext}
                        type="button"
                        style={{ maxWidth: '120px' }}
                      >
                        下一步
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="step-content">
                    <div className="form-group">
                      <label>企业名称：</label>
                      <input 
                        type="text" 
                        className={`form-control ${errors.corpName ? 'is-invalid' : ''}`}
                        value={corpName}
                        onChange={(e) => setCorpName(e.target.value)}
                        placeholder="请输入企业名称"
                      />
                      {errors.corpName && <div className="invalid-feedback">{errors.corpName}</div>}
                    </div>
                    <div className="form-group">
                      <label>企业地址：</label>
                      <input 
                        type="text" 
                        className={`form-control ${errors.corpAddress ? 'is-invalid' : ''}`}
                        value={corpAddress}
                        onChange={(e) => setCorpAddress(e.target.value)}
                        placeholder="请输入企业地址"
                      />
                      {errors.corpAddress && <div className="invalid-feedback">{errors.corpAddress}</div>}
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>联系人：</label>
                          <input 
                            type="text" 
                            className="form-control"
                            value={contactPerson}
                            onChange={(e) => setContactPerson(e.target.value)}
                            placeholder="请输入联系人姓名"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>联系电话：</label>
                          <input 
                            type="tel" 
                            className="form-control"
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)}
                            placeholder="请输入联系电话"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>联系邮箱：</label>
                      <input 
                        type="email" 
                        className={`form-control ${errors.contactEmail ? 'is-invalid' : ''}`}
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="请输入联系邮箱"
                      />
                      {errors.contactEmail && <div className="invalid-feedback">{errors.contactEmail}</div>}
                    </div>
                    <div className="btn-container">
                      <button 
                        className="btn btn-success btn-block" 
                        onClick={handleBack}
                        type="button"
                        style={{ maxWidth: '120px' }}
                      >
                        上一步
                      </button>
                      <button 
                        className="btn btn-success btn-block" 
                        onClick={handleNext}
                        type="button"
                        style={{ maxWidth: '120px' }}
                      >
                        提交
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'register-corporation' && registrationComplete && (
              <div className="registration-success text-center">
                <div className="success-icon">
                  <div className="green-circle">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="60" cy="60" r="58" stroke="#00C853" strokeWidth="4"/>
                      <path d="M40 60L54 74L80 48" stroke="#00C853" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="mb-4">注册成功</h3>
                <div className="tutorial-link mb-4">
                  <p>查看以下教程链接：</p>
                  <a href="https://www.youtube.com/embed/VYr7j25zcnA" className="tutorial-box">
                    https://www.youtube.com/embed/VYr7j25zcnA
                  </a>
                </div>
                <button 
                  className="btn btn-success px-5" 
                  onClick={() => handleTabClick("login")}
                >
                  登录
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsLoginForm; 