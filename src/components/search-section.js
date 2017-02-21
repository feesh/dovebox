import React from 'react';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      initialDoves: ['dove1', 'dove2', 'dove3'],
      filteredDoves: [],
    };

    console.log(this);
  }

  componentDidMount() {
    this.setState({filteredDoves: this.state.initialDoves})
  }

  filterList(event) {
    console.log(this);
    var updatedList = this.state.initialDoves;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({filteredDoves: updatedList});
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
