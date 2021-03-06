import React, { Component } from "react";
import Counter from "./Counter";
import { FcIdea, FcFeedback, FcUndo, FcLock } from "react-icons/fc";
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
  CardLink,
  CardImg,
  NavLink,
  TabPane,
  Progress,
  CardFooter,
  ButtonGroup,
} from "../../../../node_modules/reactstrap";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
      quickViewProduct: {},
      isAdded: false,
    };
  }
  addToCart(image, name, price, id, quantity) {
    this.setState(
      {
        selectedProduct: {
          image: image,
          name: name,
          price: price,
          id: id,
          quantity: quantity,
        },
      },
      function () {
        this.props.addToCart(this.state.selectedProduct);
      }
    );

    this.setState(
      {
        isAdded: true,
      },
      function () {
        setTimeout(() => {
          this.setState({
            isAdded: false,
            selectedProduct: {},
          });
        }, 3500);
      }
    );
  }
  quickView(image, name, price, id) {
    this.setState(
      {
        quickViewProduct: {
          image: image,
          name: name,
          price: price,
          id: id,
        },
      },
      function () {
        this.props.openModal(this.state.quickViewProduct);
      }
    );
  }

  render() {
    let image = this.props.image;
    let name = this.props.name;
    let price = this.props.price;
    let id = this.props.id;
    let quantity = this.props.productQuantity;
    return (
      <div style={{ width: "15rem", marginRight: "30px", marginLeft: "10px" }}>
        <p>
          <center>
            <div
              className="product"
              style={{
                boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                height: "475px",
              }}
            >
              <span
                style={{ marginTop: "10px", paddingBottom: "10px" }}
                className="product-name"
              >
                <Button
                  onClick={this.quickView.bind(
                    this,
                    image,
                    name,
                    price,
                    id,
                    quantity
                  )}
                  size="large"
                  style={{
                    fontSize: "110%",
                    marginTop: "5px",
                    marginBottom: "2px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      left: "-5px",
                      top: "-3px",
                    }}
                  >
                    <FcIdea style={{ position: "relative", top: "-5px" }} />{" "}
                    <span style={{ position: "relative", top: "-2px" }}>
                      {this.props.name}
                    </span>
                  </div>
                </Button>
              </span>
              <div className="product-image">
                <img
                  style={{
                    width: "14rem",
                    position: "relative",
                  }}
                  src={image}
                  alt={this.props.name}
                  onClick={this.quickView.bind(
                    this,
                    image,
                    name,
                    price,
                    id,
                    quantity
                  )}
                />
              </div>
              <p className="product-price">{this.props.price}</p>
              <Counter
                productQuantity={quantity}
                updateQuantity={this.props.updateQuantity}
                resetQuantity={this.resetQuantity}
              />
              <br />
              <button
                style={{ borderRadius: "10px" }}
                className={!this.state.isAdded ? "" : "added"}
                type="button"
                onClick={this.addToCart.bind(
                  this,
                  image,
                  name,
                  price,
                  id,
                  quantity
                )}
              >
                {!this.state.isAdded ? "ADD TO CART" : "✔ ADDED"}
              </button>
            </div>
          </center>
        </p>
      </div>
    );
  }
}

export default Product;
