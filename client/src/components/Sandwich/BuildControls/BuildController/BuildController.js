import React from 'react';

import classes from './BuildController.css';

const buildController = (props) => (
    <div className={classes.BuildController}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removed}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>
);

export default buildController;