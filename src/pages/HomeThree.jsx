// import CtaSection from "@sections/home-3/Cta";
import HeroSection from "@sections/home-3/Hero";
// import VideoSection from "@sections/home-3/Video";
import ContentSectionOne from "@sections/home-3/ContentOne";
// import ContentSectionTwo from "@sections/home-3/ContentTwo";
// import Ticker from "@sections/home-3/Ticker";
import TickerSection from "@sections/home-3/Ticker/TickerSection";
import TestimonialSection from "@sections/home-3/Testimonial";
import FeatureSection from "@sections/home-3/Feature";
import FooterLayoutOne from "@components/Footer/FooterOne";
import Header from "@components/Header";
import Layout from "@components/Layout/PageWrapper/PageWrapper";

const HomepageThree = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header
          scroll={true}
          logoUrl="/image/today-assign/logo_today_assign.png"
          btnAnimation={false}
          signUpButtonClass="btn-masco btn-primary-l03 btn-shadow rounded-pill"
        />
        <HeroSection />
        <FeatureSection />
        <ContentSectionOne />
        <TickerSection />
        {/* <ContentSectionTwo /> */}
        {/* <VideoSection /> */}
        <TestimonialSection />
        <FooterLayoutOne
          socialClass="list-social--hvr-primary-l3"
          className="padding-top-100 footer--light footer-l03"
          logo="today-assign/logo_today_assign.png"
        />{" "}
      </Layout>
    </>
  );
};

export default HomepageThree;
