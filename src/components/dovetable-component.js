import React from 'react';

class DoveTable extends React.Component {
  renderDoveTable() {
    const { doves } = this.props;
    const dovelist = doves.map((dove, i) => this.renderDove(i, dove));

    // If there are no doves, don't render a list
    if (!doves.length) return null;

    return (
      <table className="doves">
        <thead>
          <tr>
            <td>Dove</td>
            <td>Last command</td>
          </tr>
        </thead>
        <tbody>
          {dovelist}
        </tbody>
      </table>
    );
  }

  renderDove(key, dove) {
    return (
      <tr key={key} id={key} style={{ backgroundColor: dove.color }}>
        <td>{dove.id}</td>
        <td>{dove.last_command}</td>
      </tr>
    );
  }

  render() {
    const { doves } = this.props;

    return (
      <section className="content__dovetable">
        {this.renderDoveTable()}
      </section>
    );
  }
}

export default DoveTable;
