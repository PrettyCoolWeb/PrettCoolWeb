import React, { useState } from "react";
import { Button } from "reactstrap";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const providersNames = ["google"];

const Loginbutton = (props) => (
  <div
    className="app-header-right"
    style={{
      marginTop: 16,
      alignContent: "center",
    }}
  >
    {" "}
    &nbsp;
    <a href={`/#/dashboards/account`}>
      <Button
        className="btn-icon-horizontal btn-transition app-header-right"
        outline
        color="dark"
      >
        <i
          className="pe-7s-home"
          style={{
            fontSize: "20px",
            alignContent: "center",
          }}
        ></i>
        Login
      </Button>
    </a>{" "}
  </div>
);

const Logoutbutton = (props) => (
  <Button
    style={{
      alignContent: "center",
    }}
    onClick={props.onClick}
  >
    Logout
  </Button>
);

const LoginAct = (props) => {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem("jwt"));

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    setIsLogged(false);
    window.location.reload();
  };

  let buttons;

  if (isLogged) {
    buttons = <Logoutbutton onClick={logout} />;
  } else {
    buttons = (
      <ul style={{ listStyleType: "none" }}>
        {providersNames.map((providerName, i) => (
          <li key={providerName}>
            <Loginbutton providerName={providerName} />
          </li>
        ))}
      </ul>
    );
  }

  let text;

  if (isLogged) {
    text = ` `;
  } else {
    text = [];
  }

  return (
    <span className="app-header-right">
      {text}
      {buttons}
    </span>
  );
};

export default LoginAct;
