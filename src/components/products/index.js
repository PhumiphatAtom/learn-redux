import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct, removeProduct } from "../../redux/product/productAction";

class Products extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            fontSize: 25,
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            // textAlign: "center",
          }}
        >
          Number of Products
        </div>
        <div
          style={{
            fontSize: 25,
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
          }}
        >
          ===== {this.props.numOfProduct} =====
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => {
              this.props.addProduct();
            }}
            style={{ height: 30, width: 100, margin: 10 }}
          >
            + 1
          </button>
          <button
            onClick={() => {
              this.props.removeProduct();
            }}
            style={{ height: 30, width: 100, margin: 10 }}
          >
            - 1
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numOfProduct: state.numOfProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: () => dispatch(addProduct()),
    removeProduct: () => dispatch(removeProduct()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
