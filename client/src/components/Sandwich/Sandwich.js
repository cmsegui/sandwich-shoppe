import React from 'react';
import SandwichIngredient from './SandwichIngredient/SandwichIngredient';

import classes from './Sandwich.css';

const sandwich = (props) => {
    return(
        <div className={classes.Sandwich}>
            <SandwichIngredient type="bread-top" />
            <SandwichIngredient type="cheese" />
            <SandwichIngredient type="meat" />
            <SandwichIngredient type="tomato" />
            <SandwichIngredient type="salad" />
            <SandwichIngredient type="bread-bottom" />
        </div>
    );
};

export default sandwich;