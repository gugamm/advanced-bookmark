import React, { PureComponent } from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import '../styles/SignIn.css';
import { apiConnect } from 'redux-api-mapper';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({username, password}) {
    this.props.Auth.signin.call(null, null, JSON.stringify({username, password}));
  }

  renderAlertError() {
    return (
      <div className="alert alert-danger">
        {this.props.error}
      </div>
    );
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
          {this.props.error && this.renderAlertError()};
          <button type="submit" disabled={this.props.isFetching} className="btn btn-primary">Sign In</button>
        </Form>
      </div>
    );
  }
}

function mapApiToProps(api) {
  return {
    Auth : api.Auth
  };
};

function mapStateToProps(state) {
  return {
    error : state.auth.error,
    isFetching : state.auth.isFetching
  }
};

const enchance = compose(
  reduxForm({form : 'signin'}),
  apiConnect(mapApiToProps),
  connect(mapStateToProps)
);

export default enchance(SignIn);
