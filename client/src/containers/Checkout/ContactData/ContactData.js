import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';


class ContactData extends Component {
    state = {
        name: '',
        email: '', 
        address: {
            street: '', 
            city: '', 
            zipCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.state.ingredients);

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Mia Bones',
                address: {
                    street: '123 Rockingway Street',
                    zipCode: '30303',
                    state: 'Georgia'
                },
                email: 'mia@email.com',
            },
            deliveryMethod: 'ASAP'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Email" />
                <input className={classes.Input} type="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="text" name="city" placeholder="City" />
                <input className={classes.Input} type="text" name="zipCode" placeholder="Zip Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Information</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;