import React from 'react';

import Search from './search-section.js';

class Header extends React.Component {
  // Decorative search button...
  handleClick(event) {
    event.preventDefault();
    this.props.toggleAddPanel();
  }

  render() {
    const { doves } = this.props;

    return (
      <header>
        <div className="content">
          <div className="title">
            <h1><a href="" title="DoveBox">🐥📦 DoveBox</a></h1>
          </div>
          <div className="actions">
            <Search
              doves={doves}
              {...this.props}
            />
            <a href="" className="btn add-panel" onClick={(event) => this.handleClick(event)}>Add new dove</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
