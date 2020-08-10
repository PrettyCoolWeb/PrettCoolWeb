import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Pages

import HomeDashboard from "./Home/";
import Services from "./Services/";
import ShopPage from "./Shop/";

// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions/";


const Dashboards = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Route path={`${match.url}/home`} component={HomeDashboard} />
          <Route path={`${match.url}/services`} component={Services} />
          <Route path={`${match.url}/shop`} component={ShopPage} />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Dashboards;
