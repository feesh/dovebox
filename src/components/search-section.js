import React from 'react';

class Search extends React.Component {
  // Pass next panel selection to parent
  filterList(event) {
    this.props.filterList(event);
  }

  render() {
    return (
      <div className="searchform">
        <input type="text" id="searchbox" placeholder="Search doves" onChange={(event) => this.filterList(event)} />
        <a href="" className="btn submit" alt="Submit search" title="Submit search" id="searchbtn">Search</a>
      </div>
    );
  }
}

export default Search;
