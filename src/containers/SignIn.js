import React, { PureComponent } from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import * as actions from '../actions/index';
import '../styles/SignIn.css';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({username, password}) {
    //make login
  }

  render() {
    return (
      <div className="sign-in-component">
        <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
          <div className="form-group">
            <label>username</label>
            <Field name="username" component="input" type="text" className="form-control" placeholder="username" />
          </div>
          <div className="form-group">
            <label>password</label>
            <Field name="password" component="input" type="password" className="form-control" placeholder="password" />
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </Form>
      </div>
    );
  }
}

export default reduxForm({form : 'signin'}, null, actions)(SignIn);
