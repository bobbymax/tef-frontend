/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter-popup mfp-hide" id="newsletter-popup">
      <figure>
        <img
          src="images/newsletter-popup.jpg"
          width={500}
          height={269}
          alt="newsletter"
        />
      </figure>
      <div className="newsletter-content">
        <h3>Join Our Mailing List</h3>
        <p>Stay informed! Monthly tips and discount.</p>
        <form action="#" method="get" className="inline-form mx-auto">
          <input
            type="email"
            name="email"
            id="email2"
            placeholder="Email address here..."
            required
          />
          <button className="btn btn-dark" type="submit">
            SUBMIT
          </button>
        </form>
        <div className="form-checkbox">
          <input
            type="checkbox"
            id="hide-newsletter-popup"
            name="hide-newsletter-popup"
            required
          />
          <label htmlFor="hide-newsletter-popup">
            Don't show this popup again
          </label>
        </div>
        <div className="social-links">
          <a
            href="#"
            title="facebook"
            className="social-link fab fa-facebook-f"
          />
          <a href="#" title="twitter" className="social-link fab fa-twitter" />
          <a
            href="#"
            title="pinterest"
            className="social-link fab fa-pinterest"
          />
          <a
            href="#"
            title="linkedin"
            className="social-link fab fa-linkedin-in"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
