import React, { PureComponent } from 'react';
import SectionList from '../components/SectionList';
import AddSection from '../components/AddSection';
import { connect } from 'react-redux';

class Home extends PureComponent {
  render() {
    return (
      <div>
        {this.props.authenticated && <AddSection />}
        <SectionList />;
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated : state.auth.authenticated
  };
};

export default connect(mapStateToProps)(Home);