import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
          <div className="grid wide">
        <div className="footer__wrapper">
            <div className="footer__list l-3 m-6 c-12">
              <div className="footer__logo">
                <img
                  src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/logo-footer.png"
                  alt=""
                />
              </div>
              <div className="footer__logo-desc">
                Lorem ipsum dolor sit ametco nsec te tuer adipiscing elitae
              </div>
              <div className="footer__item">
                <div className="footer__item-info">
                  <i className="far fa-envelope"></i>
                  <span>setsail@qode.com</span>
                </div>
                <div className="footer__item-info">
                  <i className="fas fa-phone-alt"></i>
                  <span>1 562 867 5309</span>
                </div>
                <div className="footer__item-info">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Broadway & Morris St, New York</span>
                </div>
              </div>
            </div>
            <div className="footer__list l-3 m-6 c-12">
              <div className="footer__list-title">Our Recent Posts</div>
              <div className="footer__item">
                <div className="footer__item-text">
                  Visit Thailand, Bali And China
                </div>
                <div className="footer__item-date">September 7, 2016</div>
              </div>
              <div className="footer__item">
                <div className="footer__item-text">The Sound Of Our Jungle</div>
                <div className="footer__item-date">September 7, 2016</div>
              </div>
              <div className="footer__item">
                <div className="footer__item-text">
                  New Year, New Resolutions!
                </div>
                <div className="footer__item-date">September 7, 2016</div>
              </div>
            </div>
            <div className="footer__list l-3 m-6 c-12">
              <div className="footer__list-title">
                Subcribe to our Newsletter
              </div>
              <div className="footer__item">
                <div className="footer__list-desc">
                  Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho
                </div>
              </div>
              <div className="footer__item">
                <div className="footer__item-fill-info btn">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Name" />
                </div>
                <div className="footer__item-fill-info btn">
                  <i className="far fa-envelope"></i>
                  <input type="text" placeholder="Email" />
                </div>
                <button className="footer__item-subcribe btn">Subcribe</button>
              </div>
            </div>
            <div className="footer__list l-3 m-6 c-12">
              <div className="footer__item">
                <div className="footer__list-title">Our Instagram</div>
                <div className="footer__list-desc">
                  Aliquam lorem ante, dapibus inviver raqui feugiat a, tellus.
                  Phasellus null
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
