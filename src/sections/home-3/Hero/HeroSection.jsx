import Button from "@components/Buttons";
const HeroSection = () => {
  return (
    <div className="home-3_hero-section" id="hero">
      <div className="home-3_hero-shape">
        <img src="/image/home-3/hero-shape.png" alt="image alt" />
      </div>
      <div className="container">
        <div className="row row--custom">
          <div
            className="col-lg-4 offset-lg-1 col-sm-4 col-5"
            data-aos-duration="1000"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="home-3_hero-image-block">
              <div className="home-3_hero-image">
                <img
                  className="hero-image"
                  src="/image/home-3/hero-mobile.png"
                  alt="hero image"
                />
                <div className="home-3_hero-image-shape-1">
                  <img
                    src="/image/home-3/hero-image-shape-1.svg"
                    alt="image shape"
                  />
                </div>
                <div className="home-3_hero-image-shape-2">
                  <img
                    src="/image/home-3/hero-image-shape-2.svg"
                    alt="image shape"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-7 col-md-10"
            data-aos-duration="1000"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="home-3_hero-content">
              <div className="home-3_hero-content-text">
                <h1 className="hero-content__title heading-xl text-black">
                Master Your Time with Assign Today
                </h1>
                <p>
                Assign Today 是一款创新的时间管理应用程序，灵感来自 Elon Musk 的 “Time Boxing” 方法。开始高效组织你的任务，掌控你的每一天。
                </p>
              </div>
              <div className="home-3_hero-content-stat-wrapper">
                <div className="home-3_hero-content-stat">
                  <div className="home-3_hero-content__customer-count">
                    <img src="/image/home-3/avatar.png" alt="hero 3 avatar" />
                    <p>
                      64,739
                      <span> Happy Customers </span>
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="home-3_hero-content__rating-count">
                    <p>
                      4.8/5
                      <span>
                        <img src="/image/home-3/stars.png" alt="hero 3 stars" />
                        Rating
                      </span>
                    </p>
                  </div>
                </div>
                <Button
                  href="/content"
                  animation={false}
                  className="btn-primary-l03 btn-shadow rounded-pill"
                >
                  Start a 10-day free trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
