/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Brand = () => {
  return (
    <>
      <Link to="#" className="mobile-menu-toggle" title="Mobile Menu">
        <i className="p-icon-bars-solid" />
      </Link>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" width={171} height={41} />
      </Link>
      {/* End of Divider */}
    </>
  );
};

export default Brand;
