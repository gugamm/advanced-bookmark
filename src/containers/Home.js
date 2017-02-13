import React, { PureComponent } from 'react';
import { mockSectionList } from '../mock/section-list';
import SectionList from '../components/SectionList';

class Home extends PureComponent {
  render() {
    return <SectionList sections={mockSectionList}/>;
  }
}

export default Home;