import React from "react";

const ContentSectionOne = () => {
  return (
    <div className="home-3_content-section-1 section-padding-100 bg-light-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="home-3_content-widget pr-lg-3 pr-md-0">
              <h2 className="home-3_content-widget__title heading-md text-black">
                Unlock Your Productivity with Time Boxing and Assign Today
              </h2>
              <p className="home-3_content-widget__text">
                Experience enhanced focus and efficiency with the Time Boxing method.
                Assign Today helps you manage your time effectively, ensuring you achieve
                your goals.
              </p>
              <ul className="home-3_content-widget__list">
                <li>
                  <span className="icon">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <p>Boosts productivity through structured time management.</p>
                </li>
                <li>
                  <span className="icon">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <p>Reduces procrastination by setting clear deadlines.</p>
                </li>
                <li>
                  <span className="icon">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <p>Enhances work-life balance with better time allocation.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-10">
            <div className="home-3_content-image-block">
              <img
                src="/image/home-3/content-image-1.png"
                alt="productivity image"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionOne;
