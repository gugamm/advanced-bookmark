import React, { PureComponent } from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import { apiConnect } from 'redux-api-mapper';
import { compose } from 'redux';
import '../styles/AddSection.css';

class AddSection extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({sectionName}) {
    const newSection = {name : sectionName};
    this.props.createSection(null, null, newSection);
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.handleSubmit)} className="add-section-component form-inline">
        <div className="form-group">
          <label>name :</label>
          <Field name="sectionName" type="text" component="input" placeholder="section name" className="form-control" />
        </div>
        <button type="submit" className="btn btn-default">add</button>
      </Form>
    );
  }
}

function mapApiToPros(api) {
  return {
    createSection : api.Sections.createSection.call
  };
}

const enchance = compose(
  apiConnect(mapApiToPros),
  reduxForm({form : 'add-section'})
);

export default enchance(AddSection);