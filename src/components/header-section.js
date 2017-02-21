import React from 'react';

import Search from './search-section.js';

class Header extends React.Component {
  filterList(event) {
    this.props.filterList(event);
  }

  render() {
    const { doves } = this.props;

    return (
      <header>
        <div className="content">
          <div className="title">
            <h1><a href="" title="DoveBox">🐥📦</a></h1>
          </div>
          <Search
            doves={doves}
            filterList={(event) => this.filterList(event)}
          />
        </div>
      </header>
    );
  }
}

export default Header;
