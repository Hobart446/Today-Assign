import FeatureWidget from "@components/Widgets/Feature/One";
import data from "./data";
import SectionHeading from "@components/Layout/SectionHeading";

let settingProps = {
  sectionHeading: {
    title: "利用高效的任务管理功能简化工作流程",
    column: "col-xxl-8 col-xl-9 col-lg-10 col-md-12",
    classes: {
      row: "justify-content-center",
      className: "text-center",
      title: "heading-md text-black",
    },
  },
};

const FeatureSection = () => {
  return (
    <div className="home-3_feature-section section-padding-100" id="feature">
      <div className="container">
        <SectionHeading {...settingProps.sectionHeading} />
        <div className="row justify-content-center gutter-y-default">
          {data?.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-xs-10"
              data-aos-duration="1000"
              data-aos="fade-left"
              data-aos-delay={item.aos}
            >
              <FeatureWidget {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
