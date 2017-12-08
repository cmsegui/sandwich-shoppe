import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Sandwich from '../../components/Sandwich/Sandwich';

class SandwichBuilder extends Component {
    render() {
        return(
            <Aux>
                <Sandwich />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default SandwichBuilder;