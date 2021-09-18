import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { connect, useDispatch } from "react-redux";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { removeFromCart } from "../redux/ActionCreators";
const mapStateToProps = (state) => {
    return {
        products: state.products,
        cart: state.cart,
    };
};
const mapDispatchToProps = {
    removeFromCart: (campsiteId) => removeFromCart(campsiteId),
};
//render individual cart items
function RenderCartItem({product}) {
    const { removeFromCart } = this.props
    return (
        <tr>
            <th>
                <img src={product.image} alt={product.name} height="100" />
            </th>
            <th>{product.name}</th>
            <th>{product.price}</th>
            <th><Button onClick={removeFromCart(product.id)}>REMOVE</Button></th>
        </tr>
    );
}
//render cart items as list
class Cart extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        //take products array and make a new array from it with only the products that match the cart array 
        const cartData = this.props.products.products.filter((product) => this.props.cart.includes(product.id))
        //display the cartData as individual items
        const directory = cartData.map((product) => {
            return (
                <div key={product.id} className="col-md-5 m-1">
                        <RenderCartItem product={product} />
                </div>
            );
        });
        console.log(this.props.isLoading);
        if (this.props.isLoading) {
            return <Loading />;
        }
        if (this.props.errMess) {
            return <h4>{this.props.errMess}</h4>;
        }
        return (
            <div className="container">
                <div className="row">
                    <Table>
                        <tbody>{directory}</tbody>
                    </Table>
                </div>
            </div>
        )
    }
}






