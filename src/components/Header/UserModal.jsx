import React, { useState } from "react";
import InputBtn from "../Modules/InputBtn";
import Btn from "../Modules/Btn";

function UserModal() {
  const [remember, setRemember] = useState(false);
  const [active, setActive] = useState(true);

  return (
    <div className="user-modal">
      <div className="overlay"></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={active ? "login" : "non-display"}
      >
        <div className="login-header">
          <h3
            onClick={() => {
              setActive(true);
            }}
            className={`login-heading ${active ? "active" : ""}`}
          >
            LOGIN
          </h3>
          <h3
            onClick={() => {
              setActive(false);
            }}
            className={`register-heading ${!active ? "active" : ''}`}
          >
            REGISTER
          </h3>
        </div>
        <div className="login-content">
          <h3 className="login-title">Sign In Here</h3>
          <h4 className="login-desc">
            Log into your account in just a few simple steps.
          </h4>
          <InputBtn
            iconClass="fas fa-user"
            placeholder="User Name"
            type="text"
          />
          <InputBtn
            iconClass="fas fa-lock"
            placeholder="Password"
            type="Password"
          />
          <div
            onClick={() => {
              setRemember(!remember);
            }}
            className="remember-action"
          >
            <div className="checkbox">
              <span className={remember ? "dot-checkbox" : ''}></span>
            </div>
            <h4 className="remember-text">Remember me</h4>
          </div>
          <p className="lost-password">Lost Your password?</p>
          <Btn className="bg-white-btn btn-sign-in" padding="14px 42px">
            SIGN IN
          </Btn>
          <p className="other-sign-in">Sign in with Facebook or Google+</p>
        </div>
        <div className="login-footer">
          <Btn className="btn login-with-fb">Facebook</Btn>
          <Btn className="btn login-with-gg">Google+</Btn>
        </div>
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={!active ? "login" : "non-display"}
      >
        <div className="login-header">
          <h3
            onClick={() => {
              setActive(true);
            }}
            className={`login-heading ${active ? "active" : ""}`}
          >
            LOGIN
          </h3>
          <h3
            onClick={() => {
              setActive(false);
            }}
            className={`register-heading ${!active ? "active" : ""}`}
          >
            REGISTER
          </h3>
        </div>
        <div className="login-content">
          <h3 className="login-title">Register Now</h3>
          <h4 className="login-desc">
            Join the SetSail community today & set up a free account.
          </h4>
          <InputBtn
            iconClass="fas fa-user"
            placeholder="User Name"
            type="text"
          />
          <InputBtn
            iconClass="far fa-envelope"
            placeholder="Email"
            type="email"
          />
          <InputBtn
            iconClass="fas fa-lock"
            placeholder="Password"
            type="password"
          />
          <InputBtn
            iconClass="fas fa-lock"
            placeholder="Repeat Password"
            type="password"
          />
          <Btn className="bg-white-btn btn-sign-in" padding="14px 42px">
            REGISTER
          </Btn>
        </div>
      </div>
    </div>
  );
}

export default UserModal;
