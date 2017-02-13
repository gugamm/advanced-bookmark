import React, { PureComponent } from 'react';
import SectionLinks from './SectionLinks';

class Section extends PureComponent {
  render() {
    return (
      <div>
        <h3>{this.props.section.name}</h3>
        <SectionLinks links={this.props.section.links} />
      </div>
    );
  }
}

Section.propTypes = {
  section : React.PropTypes.object.isRequired
};

export default Section;
