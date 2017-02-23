import React from 'react';

import Search from './search-section.js';

class Header extends React.Component {
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
            {...this.props}
          />
        </div>
      </header>
    );
  }
}

export default Header;
