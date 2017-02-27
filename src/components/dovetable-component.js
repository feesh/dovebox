import React from 'react';

class DoveTable extends React.Component {

  // Toggle sort clicks
  handleSortClick(event, sortby) {
    event.preventDefault();
    this.props.sortList(sortby);
  }

  renderDoveTable() {
    const doves = this.props.doveList;
    const dovelist = doves.map((dove, i) => this.renderDove(i, dove));

    // If there are no doves, render nothing
    if (!dovelist.length) return null;

    return (
      <tbody>
        {dovelist}
      </tbody>
    );
  }

  renderDove(key, dove) {
    return (
      <tr key={key} id={key}>
        <td style={{ backgroundColor: dove.color }}>{dove.id}</td>
        <td>{dove.images_collected}</td>
        <td>{dove.last_command}</td>
        <td className="-deorbit"><span className="nowrap">{dove.deorbit_dt}</span></td>
        <td><button className="btn" onClick={() => this.props.deleteDove(dove.id)}>Delete</button></td>
      </tr>
    );
  }

  render() {
    return (
      <section>
        <table className="dovetable">
          <thead>
            <tr>
              <td>
                <a href="" onClick={(event, id) => this.handleSortClick(event, 'id')}>Dove</a>&nbsp;
                <a href="" onClick={(event, id) => this.handleSortClick(event, 'rainbow')}>🌈</a></td>
              <td>
                <a href="" onClick={(event, id) => this.handleSortClick(event, 'imgs')}>Imgs collected</a>
              </td>
              <td>
                <a href="" onClick={(event, id) => this.handleSortClick(event, 'cmnd')}>Last command</a>
              </td>
              <td>
                <a href="" onClick={(event, id) => this.handleSortClick(event, 'date')}>Deorbit</a>
              </td>
              <td>Action</td>
            </tr>
          </thead>
          {this.renderDoveTable()}
        </table>
      </section>
    );
  }
}

export default DoveTable;
