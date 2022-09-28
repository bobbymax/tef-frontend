/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import logoFooter from "../assets/images/logo.png";
import payment from "../assets/images/payment.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <ul className="menu menu-type2">
            <li>
              <a href="about.html">About us</a>
            </li>
            <li>
              <a href="#">our team</a>
            </li>
            <li>
              <a href="faq.html">faq</a>
            </li>
            <li>
              <a href="account.html">my account</a>
            </li>
            <li>
              <a href="contact.html">contact us</a>
            </li>
          </ul>
        </div>
        {/* End FooterTop */}
        <div className="footer-middle">
          <div className="footer-left">
            <ul className="widget-body">
              <li>
                <a href="tel:#" className="footer-icon-box">
                  <i className="p-icon-phone-solid" />
                  <span>+234 906 0000 000</span>
                </a>
              </li>
              <li>
                <a href="#" className>
                  <i className="p-icon-map" />
                  <span>
                    38 Lingu Crescent, off Aminu Kano Crescent, Wuse II, Abuja
                    FCT
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:mail@panda.com" className>
                  <i className="p-icon-message" />
                  <span>info@tef.ng</span>
                </a>
              </li>
              <li>
                <a href="#" className>
                  <i className="p-icon-clock" />
                  <span>Mon-Fri: 09:00 - 20:00</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-center">
            <a href="demo1.html" className="logo-footer">
              <img src={logoFooter} alt="logo-footer" width={171} height={41} />
            </a>
            <div className="social-links">
              <a
                href="#"
                className="social-link fab fa-facebook-f"
                title="Facebook"
              />
              <a
                href="#"
                className="social-link fab fa-twitter"
                title="Twitter"
              />
              <a
                href="#"
                className="social-link fab fa-pinterest"
                title="Pinterest"
              />
              <a
                href="#"
                className="social-link fab fa-linkedin-in"
                title="Linkedin"
              />
            </div>
            {/* End of Social Links */}
          </div>
          <div className="footer-right">
            <div className="widget-newsletter">
              <h4 className="widget-title">Subscribe Newsletter</h4>
              <p>
                Subscribe to the TEF's ordering Newsletter
                <br /> to receive updates from your favourite meals.
              </p>
              <form action="#" className="form-simple">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address here..."
                  required
                />
                <button className="btn btn-link" type="submit">
                  subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* End FooterMiddle */}
        <div className="footer-bottom">
          <p className="copyright">
            Tamuno Exalted Fingers © 2022. All Rights Reserved
          </p>
          <figure>
            <img src={payment} alt="payment" width={159} height={29} />
          </figure>
        </div>
        {/* End FooterBottom */}
      </div>
    </footer>
  );
};

export default Footer;
