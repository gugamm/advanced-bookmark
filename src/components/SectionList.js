import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Section from './Section';

class SectionList extends PureComponent {
  render() {
    const sections = this.props.sections.map(
      section => <Section section={section} key={section.id} />
    );

    return (
      <div>
        {sections}
      </div>
    );
  }
}

SectionList.propTypes = {
  sections : React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

const mapStateToProps = (state) => {
  return {
    sections : state.sections
  }
};

export default connect(mapStateToProps)(SectionList);