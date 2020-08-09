import React, { Fragment } from "react";
import MegaMenuFooter from "./Components/FooterMegaMenu";
import FooterDots from "./Components/FooterDots";

class AppFooter extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="app-footer">
          <div className="app-footer__inner">
            <div className="app-footer-left">

              <a href="./about"> Privacy</a>

            </div>
            <div className="app-footer-right">
              <a href="./contact"> Contact</a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AppFooter;
