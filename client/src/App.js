import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import SandwichBuilder from './containers/SandwichBuilder/SandwichBuilder';
import Checkout from './containers/Checkout/Checkout';
import CheckoutSummary from './components/Order/CheckoutSummary/CheckoutSummary';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={SandwichBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
