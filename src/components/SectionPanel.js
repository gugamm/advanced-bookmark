import React, { PureComponent } from 'react';
import { apiConnect } from 'redux-api-mapper';

class SectionPanel extends PureComponent {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteSection(this.props.sectionId);
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-default" onClick={this.handleDelete}>
          <span className="glyphicon glyphicon-remove"></span>
        </button>
      </div>
    );
  }
}

SectionPanel.propTypes = {
  deleteSection : React.PropTypes.func.isRequired,
  sectionId     : React.PropTypes.number.isRequired
};

const mapApiToProps = (api) => {
  const Sections = api.Sections;
  return {
    deleteSection : (id) => Sections.deleteSection.call({id})
  }
};

export default apiConnect(mapApiToProps)(SectionPanel);