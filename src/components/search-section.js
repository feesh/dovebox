import React from 'react';

class Search extends React.Component {
  // Pass filter query to reducers
  filterList() {
    const searchtext = this.refs.searchbox.value;
    this.props.filterList(searchtext);
  }

  render() {
    return (
      <div className="searchform">
        <input type="text" ref="searchbox" id="searchbox" placeholder="Search doves" onChange={(event) => this.filterList()} />
        <a href="" className="btn submit" alt="Submit search" title="Submit search" id="searchbtn">Search</a>
      </div>
    );
  }
}

export default Search;
