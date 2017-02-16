import React, { PureComponent } from 'react';
import SectionLinks from './SectionLinks';
import SectionPanel from './SectionPanel';
import { connect } from 'react-redux';

class Section extends PureComponent {
  render() {
    return (
      <div>
        <h3>{this.props.section.name}</h3>
        <SectionLinks links={this.props.section.links} />
        {this.props.authenticated && <SectionPanel sectionId={this.props.section.id} />}
      </div>
    );
  }
}

Section.propTypes = {
  section : React.PropTypes.object.isRequired,
  authenticated : React.PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    authenticated : state.auth.authenticated
  }
};

export default connect(mapStateToProps)(Section);
