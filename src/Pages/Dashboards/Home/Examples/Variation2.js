import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import classnames from "classnames";
import ReactTable from "react-table";
import { Route } from "react-router-dom";

import {
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  CardHeader,
  NavLink,
  TabContent,
  TabPane,
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";

import PerfectScrollbar from "react-perfect-scrollbar";

import {
  faAngleUp,
  faDotCircle,
  faAngleDown,
  faStrikethrough,
  faAlignCenter,
} from "@fortawesome/free-solid-svg-icons";

import { Sparklines, SparklinesCurve } from "react-sparklines";

import { makeData } from "../../../Tables/DataTables/Examples/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";

import avatar1 from "../../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../../assets/utils/images/avatars/3.jpg";
import servicespic from "../../../../assets/images/thumbs/services.png";
import aboutpic from "../../../../assets/images/thumbs/about.png";
import publishingpic from "../../../../assets/images/thumbs/publishing.png";
import shoppic from "../../../../assets/images/thumbs/shop.png";
import audiopic from "../../../../assets/images/thumbs/audio.png";
import visualpic from "../../../../assets/images/thumbs/visual.jpg";
import logo from "../../../../assets/images/logoani.gif";
import Main from "../../../Main";
import CenterMode from "../../../Components/Carousel/Examples/Slideshow/CenterMode";
import { setBackgroundImage } from "../../../../reducers/ThemeOptions";

export default class CRMDashboard2 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //doing some asynchronous call here which dispatches an action
    //and updates the state -> which inturn renders the component again.
    //I want component to be rendered after this happended. Is it possible ?

    let clientWidth = Math.min(
      window.innerWidth,
      document.documentElement.clientWidth
    );
    let logoWidth = null;
    let galleryPos = clientWidth;

    if (clientWidth <= "800") {
      logoWidth = clientWidth * 0.5;
      galleryPos = 25;
    }
    if (clientWidth >= "800" && clientWidth <= "1400") {
      logoWidth = clientWidth * 0.4;
      galleryPos = 100;
    }
    if (clientWidth > "1400") {
      logoWidth = clientWidth * 0.4;
      galleryPos = String(clientWidth / 6);
    }
  }
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <center>
            <Row>
              <Col
                mx-auto="true"
                className=" opacity-9"
                style={{ width: "31rem" }}
              >
                <Card
                  className="mb-3 main-card"
                  style={{
                    boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  }}
                >
                  <CardHeader
                    style={{
                      textAlign: "center",
                      justifyContent: "center",
                      fontSize: "160%",
                    }}
                    className="main-card dark card-header-tab"
                  >
                    <i className="pe-7s-rocket opacity-9"> </i> Welcome{" "}
                    <small>
                       
                      {Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      }).format(Date.now())}{" "}
                    </small>
                  </CardHeader>
                  <CardBody>
                    <h4
                      style={{
                        marginLeft: "-15px",
                        marginTop: "-15px",
                        marginRight: "-15px",
                        maxWidth: "750px",
                      }}
                    >
                      PrettyCoolPattern.com is{" "}
                      <a href="https://github.com/PrettyCoolPattern/PrettCoolWeb">
                        open-source
                      </a>
                      , custom coded &amp; cross-platform. Showcasing the design
                      and arts services of{" "}
                      <a href="https://github.com/JasonHoku/">Jason Hoku.</a>
                    </h4>
                    <center>
                      {" "}
                      <img src={logo} alt="logo" width="100"></img>
                    </center>
                    <h4>
                      <a href="/#/dashboards/contact">
                        All inquiries are welcome.
                      </a>
                    </h4>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col
                mx-auto="true"
                className=" opacity-9"
                style={{ width: "12rem" }}
              >
                <Card
                  mx-auto="true"
                  style={{
                    width: "11rem",
                    boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  }}
                >
                  <a
                    style={{ fontWeight: "bold" }}
                    href="#/dashboards/services"
                  >
                    {" "}
                    <Route path="#/dashboards/services" />
                    <CardHeader className="card-header-tab">
                      <div className="card text-center card-shadow-focus opacity-9">
                        Services
                      </div>
                    </CardHeader>
                    <CardBody>
                      <div>
                        <img
                          width={140}
                          className="rounded-circle text-center"
                          src={servicespic}
                          alt=""
                        />
                      </div>
                      <center>Skills &amp; Consult</center>
                    </CardBody>
                  </a>
                </Card>
                <br></br>
                <a style={{ fontWeight: "bold" }} href="#/dashboards/gallery">
                  <Card
                    mx-auto="true"
                    style={{
                      width: "11rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                    }}
                  >
                    <CardHeader className="card-header-tab">
                      <div className="card text-center card-shadow-focus opacity-9">
                        Visual Art Gallery
                      </div>
                    </CardHeader>
                    <CardBody>
                      <div>
                        <img
                          width={140}
                          className=" text-center"
                          src={visualpic}
                          alt=""
                        />
                      </div>
                      <center>Visual Gallery</center>
                    </CardBody>
                  </Card>
                </a>{" "}
                <br></br>
              </Col>
              <Col mx-auto="true" className=" opacity-9">
                <a style={{ fontWeight: "bold" }} href="#/dashboards/shop">
                  <Route path="#/dashboards/shop" />

                  <Card
                    mx-auto="true"
                    style={{
                      width: "11rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                    }}
                  >
                    <CardHeader className="card-header-tab">
                      <div className="card text-center card-shadow-focus opacity-9">
                        Shoppe
                      </div>
                    </CardHeader>
                    <CardBody>
                      <div>
                        <img
                          width={140}
                          className=" text-center"
                          src={shoppic}
                          alt=""
                        />
                      </div>
                      <center>PrettyCoolShop</center>
                    </CardBody>
                  </Card>
                </a>
                <br></br>
                <a style={{ fontWeight: "bold" }} href="#/dashboards/writing">
                  <Card
                    md="auto"
                    className="main-card mb-3"
                    style={{
                      width: "11rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                    }}
                  >
                    <CardHeader className="card-header-tab">
                      <div className="card text-center card-shadow-focus opacity-9">
                        Written Publishing
                      </div>{" "}
                      <div> </div>
                    </CardHeader>
                    <CardBody>
                      <div>
                        <img
                          width={140}
                          className=" text-center"
                          src={publishingpic}
                          alt=""
                        />
                      </div>
                      <center>Non Fiction</center>
                    </CardBody>
                  </Card>
                </a>{" "}
                <br></br>
              </Col>
              <Col mx-auto="true" className=" opacity-9">
                <a style={{ fontWeight: "bold" }} href="#/dashboards/services">
                  <Route path="#/dashboards/services" />
                  <Card
                    mx-auto="true"
                    style={{
                      width: "11rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                    }}
                  >
                    <CardHeader className="card-header-tab">
                      <div className="card text-center card-shadow-focus opacity-9">
                        About
                      </div>{" "}
                      <div> </div>
                    </CardHeader>
                    <CardBody>
                      <div>
                        <img
                          width={140}
                          className=" text-center"
                          src={aboutpic}
                          alt=""
                        />
                      </div>
                      <center> Learn More</center>
                    </CardBody>
                  </Card>{" "}
                  <br></br>
                </a>{" "}
              </Col>

              <Col mx-auto="true" className=" opacity-9">
                {" "}
                <a style={{ fontWeight: "bold" }} href="#/dashboards/music">
                  <Card
                    mx-auto="true"
                    className="main-card mb-3"
                    style={{
                      width: "11rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                    }}
                  >
                    <CardHeader className="card-header-tab">
                      <div className="card text-center card-shadow-focus opacity-9">
                        Audio Art Gallery
                      </div>{" "}
                      <div> </div>
                    </CardHeader>
                    <CardBody>
                      <div>
                        <img
                          width={140}
                          className=" text-center"
                          src={audiopic}
                          alt=""
                        />
                        <br></br>
                      </div>
                      <center>Music Production</center>
                    </CardBody>
                  </Card>
                </a>
              </Col>
            </Row>
          </center>
          <Row></Row>
          <Row>
            {" "}
            <Col>
              <Card
                className="main-card mb-3"
                style={{
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                }}
              >
                <CardHeader className="card-header-tab" color="light">
                  <div className="card-header-title font-size-lg font-weight-normal">
                    <i className="header-icon pe-7s-news-paper mr-3 text-muted opacity-6">
                      {" "}
                    </i>
                    Recent Updates: 11/17/20
                  </div>{" "}
                </CardHeader>
                <CardBody>
                  Find out what PCP is working on, get involved and learn more,
                  by visiting the new
                  <a
                    style={{ fontWeight: "bold" }}
                    href="#/dashboards/projects"
                  >
                    {" "}
                    Projects Page
                  </a>
                  .<br></br>
                  <br></br>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Card
            className="main-card mb-3"
            style={{
              boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
            }}
          >
            <CardHeader className="card-header-tab">
              <div className="card-header-title font-size-lg font-weight-normal">
                <i className="header-icon pe-7s-news-paper mr-3 text-muted opacity-6">
                  {" "}
                </i>
                Recent Updates: 10/15/20
              </div>{" "}
              <div> </div>
            </CardHeader>
            <CardBody>
              Web-Game development is kicking off! Pre-Alpha is available{" "}
              <a style={{ fontWeight: "bold" }} href="../3D/">
                here
              </a>
              .
            </CardBody>
          </Card>

          <Row></Row>

          <Row style={{ justifyContent: "center" }}>
            <Col sm="12" md="6" xl="4">
              <Card
                className="card-shadow-primary card-border text-white mb-3"
                color="primary"
              >
                <div className="dropdown-menu-header">
                  <div className="dropdown-menu-header-inner bg-primary">
                    <div className="menu-header-content">
                      <div className="avatar-icon-wrapper mb-3 avatar-icon-xl">
                        <div className="avatar-icon">
                          <img src={avatar1} alt="Avatar 5" />
                        </div>
                      </div>
                      <div>
                        <h5 className="menu-header-title">Jason Hoku Levien</h5>
                        <h6 className="menu-header-subtitle">
                          Founder / Owner
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <CardFooter className="text-center d-block">
                  <a style={{ fontWeight: "bold" }} href="#/dashboards/contact">
                    <Button className="btn-shadow-dark btn-wider" color="dark">
                      Send Message
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
