import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import CheckoutSummary from '../../components//Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';


class Checkout extends Component {


    checkoutCancelled = () => {
        this.props.history.goBack();
    }

    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return(
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} checkoutCancelled={this.checkoutCancelled} checkoutContinued={this.checkoutContinued}/>
                <Route path={this.props.match.path + '/contact-data'} render={(props) => (<ContactData ingredients={this.props.ings} price={this.props.tPrice} {...props}/>)}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        ings: state.ingredients,
        tPrice: state.totalPrice
    }
}
export default connect(mapStateToProps)(Checkout);
