import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import SandwichBuilder from './containers/SandwichBuilder/SandwichBuilder';
import Checkout from './containers/Checkout/Checkout';
import CheckoutSummary from './components/Order/CheckoutSummary/CheckoutSummary';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SandwichBuilder/>
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
