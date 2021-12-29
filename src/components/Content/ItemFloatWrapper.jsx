import React, { useState, useEffect } from "react";

function ItemFloatWrapper() {
  const [chatbox, setChatbox] = useState(false);
  const [isSideBar, setSideBar] = useState(false);

  useEffect(() => {
    window.addEventListener("click", () => setSideBar(false));
    window.addEventListener("scroll", () => {
      setTimeout(() => {
        setSideBar(false);
      }, 200);
    });
  }, []);

  return (
    <div>
      <div
        className="middle-fixed-wrapper"
        style={{ right: isSideBar ? "0px" : "-293px" }}
      >
        <div className="icon" style={{ right: isSideBar ? "222px" : "293px" }}>
          <div
            className="related"
            onClick={(e) => {
              e.stopPropagation();
              setSideBar(!isSideBar);
            }}
          >
            <svg
              className="related-icon"
              x="0px"
              y="0px"
              viewBox="0 0 87 87"
              style={{ fill: "#fff", height: "26px" }}
            >
              <path
                d="M55.4,81.5c6.1-11.1,5.2-16.1-4.3-24.3c6.1-3.5,9.5-8.5,9.1-15.7c-0.5-8.2-7.7-14.7-16.3-14.6
							c-8.5,0.1-15.6,6.7-15.9,15c-0.3,8.5,5.9,15.8,14.3,16.6c1.4,0.1,2.8,0.2,4.2,0.5c5.9,1.2,10.2,6.7,9.8,12.6
							c-0.4,6.4-5.5,11.4-11.8,11.7C24.9,84.2,5.9,68.5,3.2,49.3C-0.1,26.9,14.4,6.8,36.4,2.8c22.3-4,43.4,10,48.1,32
							c4.3,20-8.6,41.2-28.4,46.7C55.9,81.5,55.6,81.5,55.4,81.5z"
              ></path>
            </svg>
            <svg
              className="related-icon change-related-icon"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              style={{ fill: "#fff", height: "20px" }}
            >
              <path d="M 4,15C 4,15.552, 4.448,16, 5,16l 19.586,0 l-4.292,4.292c-0.39,0.39-0.39,1.024,0,1.414 c 0.39,0.39, 1.024,0.39, 1.414,0l 6-6c 0.092-0.092, 0.166-0.202, 0.216-0.324C 27.972,15.26, 28,15.132, 28,15.004c0-0.002,0-0.002,0-0.004 l0,0c0-0.13-0.026-0.26-0.078-0.382c-0.050-0.122-0.124-0.232-0.216-0.324l-6-6c-0.39-0.39-1.024-0.39-1.414,0 c-0.39,0.39-0.39,1.024,0,1.414L 24.586,14L 5,14 C 4.448,14, 4,14.448, 4,15z"></path>
            </svg>
            <span className="related__text">RELATED</span>
          </div>
          <a
            href="https://themeforest.net/checkout/81199769/create_account?_ga=2.106280388.659820192.1635923690-1502877667.1635923690&aca=direct&aid=mikado&aso=direct&clickid=RI3XaHzZaxyIR5MydK2QZyiRUkG0pUSUDwUP2Q0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=1306821&mp_value1=&utm_campaign=af_impact_radius_1306821&utm_medium=affiliate&utm_source=impact_radius"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <div className="buy-now ">
              <i className="buy-now__icon fas fa-shopping-cart"></i>
              <span className="buy-now__text">BUY NOW</span>
            </div>
          </a>
        </div>
        <div className="middle-fixed-inner">
          <div className="middle-fixed-inner__header">
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 87 87"
              style={{ fill: "#ee2852", height: "40px" }}
            >
              <path
                d="M55.4,81.5c6.1-11.1,5.2-16.1-4.3-24.3c6.1-3.5,9.5-8.5,9.1-15.7c-0.5-8.2-7.7-14.7-16.3-14.6
                                c-8.5,0.1-15.6,6.7-15.9,15c-0.3,8.5,5.9,15.8,14.3,16.6c1.4,0.1,2.8,0.2,4.2,0.5c5.9,1.2,10.2,6.7,9.8,12.6
                                c-0.4,6.4-5.5,11.4-11.8,11.7C24.9,84.2,5.9,68.5,3.2,49.3C-0.1,26.9,14.4,6.8,36.4,2.8c22.3-4,43.4,10,48.1,32
                                c4.3,20-8.6,41.2-28.4,46.7C55.9,81.5,55.6,81.5,55.4,81.5z"
              ></path>
            </svg>
            <span>Qode Interactive</span>
          </div>
          <div className="middle-fixed-inner__content">
            <span className="middle-fixed-inner__content-title">
              Related Themes
            </span>
            <div className="middle-fixed-inner__theme">
              <img
                className="middle-fixed-inner__theme-img"
                src="https://previews.customer.envatousercontent.com/files/362567171/00_preview.__large_preview.jpg"
                alt=""
              />
              <span className="middle-fixed-inner__theme-name">Seafarer</span>
              <div className="middle-fixed-inner__theme-tag">
                <span>TRAVEL & HOTEL</span>
                <span className="middle-fixed-inner__theme-price">$69</span>
              </div>
            </div>
            <div className="middle-fixed-inner__theme">
              <img
                className="middle-fixed-inner__theme-img"
                src="https://previews.customer.envatousercontent.com/files/354941098/00_preview.__large_preview.png"
                alt=""
              />
              <span className="middle-fixed-inner__theme-name">Kamperen</span>
              <div className="middle-fixed-inner__theme-tag">
                <span>TRAVEL & HOTEL</span>
                <span className="middle-fixed-inner__theme-price">$69</span>
              </div>
            </div>
            <div className="middle-fixed-inner__theme">
              <img
                className="middle-fixed-inner__theme-img"
                src="https://previews.customer.envatousercontent.com/files/327431833/00_preview.__large_preview.png"
                alt=""
              />
              <span className="middle-fixed-inner__theme-name">Augustine</span>
              <div className="middle-fixed-inner__theme-tag">
                <span>TRAVEL & HOTEL</span>
                <span className="middle-fixed-inner__theme-price">$69</span>
              </div>
            </div>
            <div className="middle-fixed-inner__theme">
              <img
                className="middle-fixed-inner__theme-img"
                src="https://previews.customer.envatousercontent.com/files/345799597/00_preview.__large_preview.jpg"
                alt=""
              />
              <span className="middle-fixed-inner__theme-name">Iver</span>
              <div className="middle-fixed-inner__theme-tag">
                <span>TRAVEL & HOTEL</span>
                <span className="middle-fixed-inner__theme-price">$69</span>
              </div>
            </div>
            <div className="middle-fixed-inner__theme">
              <img
                className="middle-fixed-inner__theme-img"
                src="https://previews.customer.envatousercontent.com/files/262083116/00_preview.__large_preview.png"
                alt=""
              />
              <span className="middle-fixed-inner__theme-name">BonVoyage</span>
              <div className="middle-fixed-inner__theme-tag">
                <span>TRAVEL & HOTEL</span>
                <span className="middle-fixed-inner__theme-price">$69</span>
              </div>
            </div>
          </div>
          <button className="middle-fixed-inner__footer btn">
            VIEW ALL QODE THEMES
            <i className="fas fa-level-up-alt"></i>
          </button>
        </div>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setChatbox(!chatbox);
        }}
        className="talk-with-us"
      >
        <svg
          id="Layer_1"
          x="0"
          y="0"
          viewBox="0 0 15 16"
          // xml:space="preserve"
          aria-hidden="true"
        >
          <path d="M1.3,16c-0.7,0-1.1-0.3-1.2-0.8c-0.3-0.8,0.5-1.3,0.8-1.5c0.6-0.4,0.9-0.7,1-1c0-0.2-0.1-0.4-0.3-0.7c0,0,0-0.1-0.1-0.1 C0.5,10.6,0,9,0,7.4C0,3.3,3.4,0,7.5,0C11.6,0,15,3.3,15,7.4s-3.4,7.4-7.5,7.4c-0.5,0-1-0.1-1.5-0.2C3.4,15.9,1.5,16,1.5,16 C1.4,16,1.4,16,1.3,16z M3.3,10.9c0.5,0.7,0.7,1.5,0.6,2.2c0,0.1-0.1,0.3-0.1,0.4c0.5-0.2,1-0.4,1.6-0.7c0.2-0.1,0.4-0.2,0.6-0.1 c0,0,0.1,0,0.1,0c0.4,0.1,0.9,0.2,1.4,0.2c3,0,5.5-2.4,5.5-5.4S10.5,2,7.5,2C4.5,2,2,4.4,2,7.4c0,1.2,0.4,2.4,1.2,3.3 C3.2,10.8,3.3,10.8,3.3,10.9z"></path>
        </svg>
        <span>Chat With Us</span>
        <div
          className="chatbox"
          style={{ display: chatbox ? "block" : "none" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="chatbox__header">
            <div
              className="chatbox__header-close"
              onClick={() => setChatbox(false)}
            >
              <i className="fas fa-times"></i>
            </div>
            <span>Live Chat</span>
            <div className="chatbox__minimize" title="Minimize"></div>
          </div>
          <div className="chatbox__admin ">
            <div className="chatbox__admin-logo">
              <img
                src="https://v2assets.zopim.io/T3tC5srDWMWEvmgbhxXfVL6uMBg21GEv-concierge?1574414248512"
                alt=""
              />
            </div>
            <div className="chatbox__admin-text">
              <span className="chatbox__admin-name">Qode Interactive</span>
              <div className="chatbox__admin-desc">Product Inquires</div>
            </div>
          </div>
          <div className="chatbox__message-list"></div>
          <div className="chatbox__footer">
            <div className="chatbox__write-message">
              <input type="text" placeholder="Nhập tin nhắn ở đây..." />
            </div>
            <div className="chatbox__footer-name">zendesk</div>
            <div className="chatbox__footer-action">
              <i className="fas fa-sign-out-alt" title="Close"></i>
              <i className="fas fa-paperclip"></i>
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
        </div>
      </div>
      <a
        href="/"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="scroll-to-top"
      >
        TOP
      </a>
    </div>
  );
}

export default ItemFloatWrapper;
