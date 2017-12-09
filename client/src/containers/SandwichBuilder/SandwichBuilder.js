import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Sandwich from '../../components/Sandwich/Sandwich';

class SandwichBuilder extends Component {
    state = {
        ingredients: {
            salad: 1, 
            bacon: 1, 
            cheese: 1, 
            meat: 2
        }
    }

    render() {
        return(
            <Aux>
                <Sandwich ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default SandwichBuilder;