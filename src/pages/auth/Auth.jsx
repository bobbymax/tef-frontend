import { useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import {
  CheckBox,
  TextInput,
  Button,
} from "../../components/commons/forms/FormElements";
import PageHeader from "../../components/PageHeader";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [termsAgreement, setTermsAgreement] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      username,
      email,
      password,
      rememberMe,
      termsAgreement,
    };

    console.log(body);

    try {
      if (activeTab === "login") {
        console.log("something if");
      } else {
        console.log("something else");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PageHeader title="My Account" />
      <BreadCrumb />
      <div className="page-content">
        <div className="container pt-8 pb-10">
          <div className="login-popup mx-auto pl-6 pr-6 pb-9">
            <div className="form-box">
              <div className="tab tab-nav-underline tab-nav-boxed">
                <ul className="nav nav-tabs nav-fill align-items-center justify-content-center mb-4">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        activeTab === "login" && "active"
                      } lh-1 ls-normal`}
                      to="#"
                      onClick={() => setActiveTab("login")}
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#"
                      className={`nav-link ${
                        activeTab === "register" && "active"
                      } lh-1 ls-normal`}
                      onClick={() => setActiveTab("register")}
                    >
                      Register
                    </Link>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className={`tab-pane ${activeTab === "login" && "active"}`}
                  >
                    <form onSubmit={handleSubmit}>
                      <TextInput
                        placeholder="Username of Email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                      <TextInput
                        placeholder="Username of Email"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <div className="form-footer">
                        <CheckBox
                          label="Remember Me"
                          value={rememberMe}
                          onChange={(e) => setRememberMe(e.target.isChecked)}
                        />
                        <Link to="#" className="lost-link d-block ">
                          Lost your password?
                        </Link>
                      </div>
                      <Button text="Login" type="submit" fullWidth />
                    </form>
                  </div>
                  <div
                    className={`tab-pane ${
                      activeTab === "register" && "active"
                    }`}
                  >
                    <form onSubmit={handleSubmit}>
                      <TextInput
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                      <TextInput
                        placeholder="Your Email Address"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <TextInput
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <div className="form-footer">
                        <CheckBox
                          label="I agree to the privacy policy"
                          value={termsAgreement}
                          onChange={(e) =>
                            setTermsAgreement(e.target.isChecked)
                          }
                        />
                      </div>
                      <Button text="Register" type="submit" fullWidth />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
