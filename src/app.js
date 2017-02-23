import 'whatwg-fetch';
import React from 'react';

import DoveTableContainer from './components/dovetable-container.js';
import Header from './components/header-section.js';

import store from './store';

/*  Dove viewer app */
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      initialDoves: ['dove1', 'dove2', 'dove3'],
      filteredDoves: [],
    };
  }

  componentDidMount() {
    this.setState({filteredDoves: this.state.initialDoves})
  }

  filterList(event) {
    var updatedList = this.state.initialDoves;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({filteredDoves: updatedList});
  }

  render() {
    const { doves } = this.props;

    return (
      <div className="page_wrapper">
        <Header
          doves={doves}
          {...this.props}
        />
        <section className="gallery">
          <div className="content">
            <DoveTableContainer doves={doves} {...this.props} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
