import React from 'react';

class Search extends React.Component {
  // Pass filter query to reducers
  filterList() {
    const searchtext = this.refs.searchbox.value;
    this.props.filterList(searchtext);
  }

  // Decorative search button...
  handleClick() {
    event.preventDefault();
    this.filterList();
  }

  render() {
    return (
      <div className="searchform">
        <input type="text" ref="searchbox" id="searchbox" placeholder="Search doves" onChange={(event) => this.filterList()} />
        <a className="btn submit" alt="Submit search" title="Submit search" id="searchbtn" onClick={(event) => this.handleClick()}>Search</a>
      </div>
    );
  }
}

export default Search;
