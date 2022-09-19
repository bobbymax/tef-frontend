/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-left">
          <a href="tel:#" className="call">
            <i className="p-icon-phone-solid" />
            <span>+234 906 0000 000</span>
          </a>
          <span className="divider" />
          <Link to="/contact" className="contact">
            <i className="p-icon-map" />
            <span>
              38 Lingu Crescent, off Aminu Kano Crescent, Wuse II, FCT Abuja
            </span>
          </Link>
        </div>
        <div className="header-right">
          <span className="divider" />
          {/* End DropDown Menu */}
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
      </div>
    </div>
  );
};

export default TopBar;
