import Header from "@components/Header";
import Banner from "@components/Banner/Banner";
import CtaSection from "@sections/home-1/Cta/CtaSection";
import FooterLayoutOne from "@components/Footer/FooterOne";
import PricingSection from "@sections/inner-pages/PriceTwo/Pricing";
import Layout from "@components/Layout/PageWrapper/PageWrapper";
let settingProps = {
  footer: {
    className: " footer-padding-default footer--dark-v1",
    logo: "today-assign/logo_today_assign.png",
    socialClass: "list-social--hvr-primary-l3",
  },
};
const PricingPageTwo = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header signUpButtonClass="btn-masco btn-primary-l03 btn-shadow rounded-pill" />
        <Banner title="Pricing" text="Pricing" />
        <PricingSection />
        <CtaSection />
        <FooterLayoutOne {...settingProps.footer} />{" "}
      </Layout>
    </>
  );
};

export default PricingPageTwo;
