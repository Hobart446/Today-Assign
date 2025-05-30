import { hasClassProps } from "@utils/helpers";

const FooterLayoutOne = ({ className, logo }) => {
  return (
    <div className={`footer${hasClassProps(className)}`}>
      <div className="container">
        <div className="footer-content text-center">
          <div className="footer-logo">
            <img 
              src={`/image/${logo}`} 
              alt="Today Assign" 
              style={{ height: "130px", width: "auto" }}
            />
          </div>
          
          <div className="footer-nav">
            <ul className="footer-menu">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Blog Posts</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">User Guide</a></li>
            </ul>
          </div>
          
          <hr className="footer-divider" />
          
          <div className="footer-bottom">
            <div className="copyright">
              <p>© 2025 Assign Today. All rights reserved.</p>
            </div>
            <div className="footer-policies">
              <ul className="policy-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLayoutOne;
