/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileNavigation from "./components/MobileNavigation";
import Newsletter from "./components/Newsletter";
import Scroller from "./components/Scroller";
import StickyFooter from "./components/StickyFooter";
import Account from "./pages/Account";
import Auth from "./pages/auth/Auth";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
// import Home from "./pages/Home";
import Order from "./pages/Order";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        {/* Body */}
        <main className="main cart order checkout account-page">
          <Routes>
            {/* <Route exact path="/" element={<Home />} /> */}
            <Route exact path="/" element={<Shop />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/auth/login" element={<Auth />} />
          </Routes>
        </main>
        {/* Footer */}
        <Footer />
        {/* End Footer */}

        {/* End Body */}
      </div>
      <div>
        {/* Sticky Footer */}
        <StickyFooter />
        {/* Scroll Top */}
        <Scroller />
        <MobileNavigation />
        <Newsletter />
      </div>
    </>
  );
};

export default App;
