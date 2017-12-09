import React from 'react';
import classes from './BuildControls.css';
import BuildController from './BuildController/BuildController';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Tomato', type: 'tomato' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map((ctrl) => (
            <BuildController key={ctrl.label} 
                             label={ctrl.label}
                             added={() => props.ingredientAdded(ctrl.type)}
                             removed={() => props.ingredientRemoved(ctrl.type)}
                             disabled={props.disabled[ctrl.type]}
            />
        ))}
    </div>
);


export default buildControls;