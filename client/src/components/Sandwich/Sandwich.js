import React from 'react';
import SandwichIngredient from './SandwichIngredient/SandwichIngredient';

import classes from './Sandwich.css';

const sandwich = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <SandwichIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add ingredients.</p>
    }
    
    return(
        <div className={classes.Sandwich}>
            <SandwichIngredient type="bread-top" />
            {transformedIngredients}
            <SandwichIngredient type="bread-bottom" />
        </div>
    );
};

export default sandwich;