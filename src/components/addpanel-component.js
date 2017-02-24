import React from 'react';
import { SketchPicker } from 'react-color';

/*  Panel for adding new doves */
class AddPanel extends React.Component {
  constructor() {
    super();

    this.state = {
      displayColorPicker: false,
      color: ''
    };
  }

  // Toggle color picker
  handleClick(event) {
    event.preventDefault();
    this.setState({
      displayColorPicker: !this.state.displayColorPicker,
      color: ''
    });
  }

  // Toggle add new
  handleSaveClick(event) {
    event.preventDefault();
    const id = this.refs.id.value;
    const color = this.state.color;
    const command = this.refs.command.value;
    const active = this.refs.active.checked;
    this.props.addDove(id, color, command, active);
  }

  // For color picker
  handleChangeComplete(color, event) {
    console.log(color.hex);
    this.setState({ color: color.hex });
  }

  // Close picker
  handleClose() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  }

  render() {
    return (
      <section className="panel -addpanel">
        <div className="content">
          <h2>Bring a new dove into the flock:</h2>

          {this.state.displayColorPicker &&
            <div>
              <SketchPicker color={ this.state.color } onChangeComplete={(color, event) => this.handleChangeComplete(color, event)} />
              <div className="overlay" onClick={() => this.handleClose()}></div>
            </div>
          }

          <form className="newdove">
            <div>
              <label>Dove ID</label>
              <input type="text" id="id" ref="id" placeholder="Two characters please" maxLength="2" />
            </div>
            <div>
              <label>Command</label>
              <input type="text" id="command" ref="command" placeholder="What's your command?" />
            </div>
            <div className="columns">
              <div>
                <label>Select a color</label>
                <button
                  className="btn"
                  style={{ backgroundColor: this.state.color }}
                  onClick={(event) => this.handleClick(event)}
                >
                  {this.state.color ? this.state.color : 'Color'}
                </button>
              </div>
              <div>
                <label>Active duty?</label>
                <input type="checkbox" id="active" ref="active" />
              </div>
            </div>
            <a href="" className="btn add-dove" onClick={(event) => this.handleSaveClick(event)}>Save dove</a>
          </form>
        </div>
      </section>
    );
  }
}

export default AddPanel;
