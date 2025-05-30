import React from "react";

const ContentSectionOne = () => {
  return (
    <div className="home-3_content-section-1 section-padding-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="home-3_content-widget pr-lg-3 pr-md-0">
              <h2 className="home-3_content-widget__title heading-md text-black">
                使用TimeBoxing释放您的生产力<br></br>今天就分配任务
              </h2>
              <p className="home-3_content-widget__text" style={{ marginBottom: '30px' }}>
                体验TimeBoxing方法，提高注意力和效率。Assign Today 可帮助您有效管理时间，确保您实现目标。
              </p>
              <ul className="home-3_content-widget__list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                  <span className="icon" style={{ marginRight: '10px' }}>
                    <i className="fas fa-chart-line"></i>
                  </span>
                  通过有条理的时间管理提高工作效率。
                </li>
                <li style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                  <span className="icon" style={{ marginRight: '10px' }}>
                    <i className="fas fa-tasks"></i>
                  </span>
                  通过设定明确的最后期限来减少拖延症。
                </li>
                <li style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                  <span className="icon" style={{ marginRight: '10px' }}>
                    <i className="fas fa-balance-scale"></i>
                  </span>
                  更好地分配时间，加强工作与生活的平衡。
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-10">
            <div className="home-3_content-image-block">
              <img
                src="/image/home-3/productivity_item.jpg"
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
