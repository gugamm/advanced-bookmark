import React, { PureComponent } from 'react';

class SectionLinks extends PureComponent {
  render() {
    const linksRows = this.props.links.map((link, index) => <tr key={link.id}>
      <td>{index}</td>
      <td><a href={link.url}>{link.name}</a></td>
      <td>{link.description}</td>
    </tr>);

    return (
      <table className="section-links-component table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {linksRows}
        </tbody>
      </table>
    )
  }
}

SectionLinks.propTypes = {
  links : React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default SectionLinks;