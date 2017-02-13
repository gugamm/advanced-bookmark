import React, { PureComponent } from 'react';
import Header from '../components/Header';

class App extends PureComponent {
  render() {
    return (
      <div className="app-component container">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default App;