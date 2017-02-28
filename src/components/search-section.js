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

  // Clear search filter
  handleClear() {
    event.preventDefault();
    this.refs.searchbox.value = '';
    this.props.clearFilter();
  }

  render() {
    return (
      <div className="searchform">
        <input type="text" ref="searchbox" id="searchbox" placeholder="Search doves" onChange={(event) => this.filterList()} />
        { this.props.doves.filter &&
          <a className="btn clearsearch" alt="Clear search" title="Clear search" id="clearbtn" onClick={(event) => this.handleClear()}>Clear</a>
        }
        { !this.props.doves.filter &&
          <a className="btn submit" alt="Submit search" title="Submit search" id="searchbtn" onClick={(event) => this.handleClick()}>Search</a>
        }
      </div>
    );
  }
}

export default Search;
