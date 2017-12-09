import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Sandwich from '../../components/Sandwich/Sandwich';
import BuildControls from '../../components/Sandwich/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: .65, 
    cheese: 1.0, 
    tomato: .45, 
    meat: 2.1, 
    bacon: 1.05
};

class SandwichBuilder extends Component {
    state = {
        ingredients: {
            salad: 0, 
            tomato: 0,
            bacon: 0, 
            cheese: 0, 
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
    }

    render() {
        return(
            <Aux>
                <Sandwich ingredients={this.state.ingredients} />
                <BuildControls ingredientAdded={this.addIngredientHandler}
                               ingredientRemoved={this.removeIngredientHandler}
                />
            </Aux>
        );
    }
}

export default SandwichBuilder;