import 'whatwg-fetch';
import React from 'react';

import DoveTable from './components/dovetable-component.js';
import Header from './components/header-section.js';

/*  Gallery viewer app */
class App extends React.Component {

  render() {
    const { doves } = this.props;

    return (
      <div className="page_wrapper">
        <Header doves={doves} />
        <section className="gallery">
          <div className="content">
            <DoveTable doves={doves} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
