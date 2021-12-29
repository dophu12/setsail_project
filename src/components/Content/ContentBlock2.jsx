import React, {useState, useEffect} from "react";
import ContentText from "./ContentText";

function ContentBlock2(props) {
  const [scroll, setScroll] = useState(false);
  const handleScrollImg = () => {
    const bool = 6100 < window.scrollY && window.scrollY < 7100;
    if (bool) setScroll(true);
  };

  useEffect(() => {
    handleScrollImg();
  }, [])

  window.addEventListener('scroll', handleScrollImg)

  return (
    <div className={props.className}>
      <div className="grid wide">
        <div className="content__container-2">
          <div className="right-inner l-7 m-12 c-12">
            {/* __TEXT SECTION ON THE TOP */}
            <div className="content__text__wrapper">
              <ContentText title={props.title} desc={props.desc} />
            </div>

            {/* __BLOG SECTION ON BETWEEN */}
            <div className="blog-list">
              {props.blogs?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="blog-item ">
                      <div className="blog-img">
                        <img src={item.thumbnail} alt="" />
                      </div>
                      <div className="blog__text">
                        <h3 className="title">{item.blogTitle}</h3>
                        <p className="desc">{item.desc}</p>
                        <div className="inner-below">
                          <div className="date">{item.date}</div>
                          <div className="comment">
                            <i className="far fa-comment"></i>
                            <div className="comment-text">Comment</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="left-inner l-4 m-6 c-12">
            <div
              className="img-feature"
              style={{ clipPath: scroll ? "inset(0)" : "inset(0 100% 0 0)" }}
            >
              <img src={props.imgFeature} alt="" />
              <div
                className="img-feature__text"
                style={{ clipPath: scroll ? "inset(0)" : "inset(0 0 0 100%)" }}
              >
                <span className="sub-heading">{props.subTitleFeature}</span>
                <h3 className="heading">{props.titleFeature}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentBlock2;
