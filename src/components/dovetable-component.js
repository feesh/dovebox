import React from 'react';

class DoveTable extends React.Component {
  renderDoveTable() {
    const { doves } = this.props;
    const dovelist = doves.map((dove, i) => this.renderDove(i, dove));

    // If there are no doves, don't render a list
    if (!doves.length) return null;

    return (
      <table className="dovetable">
        <thead>
          <tr>
            <td>Dove</td>
            <td>Last command</td>
            <td>Images collected</td>
            <td>Deorbit</td>
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
      <tr key={key} id={key}>
        <td style={{ backgroundColor: dove.color }}>{dove.id}</td>
        <td>{dove.images_collected}</td>
        <td>{dove.last_command}</td>
        <td>{dove.deorbit_dt}</td>
      </tr>
    );
  }

  render() {
    return (
      <section>
        {this.renderDoveTable()}
      </section>
    );
  }
}

export default DoveTable;
