import React from 'react';

import classes from './BuildController.css';

const buildController = (props) => (
    <div className={classes.BuildController}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
);

export default buildController;