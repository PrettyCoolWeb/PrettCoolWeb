import react from "react";
import React, { Fragment } from "react";
import { useHistory } from "react-navi";
import { Route, Redirect } from "react-router-dom";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import "../Layout/AppHeader/Components/analytics";
class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickX = this.handleClick.bind(this);

    this.state = {
      sideBarVar: "1",
    };
  }

  componentDidMount() {}

  handleClick() {}

  render() {
    return (
      <Fragment>
        <CSSTransitionGroup>
          <span
            className="landingContent"
            onClick={() => (window.location.hash = "/dashboards/home")}
          >
            <span
              style={{
                position: "absolute",

                top: "150px",
                zIndex: 125,
                textAlign: "center",
              }}
            >
              PrettyCoolPattern Arts
            </span>
            <br />
            <span
              style={{
                position: "absolute",
                bottom: "225px",
                zIndex: 125,
              }}
            >
              Click To Enter
            </span>{" "}
            <br />
            <img
              style={{
                width: window.innerWidth * 0.35,
                alignContent: "center",
                position: "absolute",
                maxWidth: "150px",
                maxHeight: "150px",
              }}
              src="/images/logogif.gif"
            ></img>
          </span>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default LandingPage;
