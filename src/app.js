import 'whatwg-fetch';
import React from 'react';

import DoveTableContainer from './components/dovetable-container.js';
import Header from './components/header-section.js';
import AddPanel from './components/addpanel-component.js';

import store from './store';

/*  Dove viewer app */
class App extends React.Component {
  render() {
    const { doves } = this.props;

    return (
      <div className="page_wrapper">
        <Header doves={doves} {...this.props} />
        <section className="gallery">
          {this.props.doves.addPanelIsVisible &&
            <AddPanel doves={doves} {...this.props} />
          }
          <div className="content">
            <DoveTableContainer doves={doves} {...this.props} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
