import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class SignOut extends PureComponent {
  componentDidMount() {
    this.props.signOut();
  }

  render() {
    return (
      <div>You have been signed out!</div>
    );
  }
}

export default connect(null, actions)(SignOut);