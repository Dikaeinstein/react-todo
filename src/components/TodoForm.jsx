import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.setValue = this.setValue.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setValue(input) {
    this.input = input;
  }

  handleClick(e) {
    e.preventDefault();
    const { input } = this;
    this.props.onClick(input.value);
    input.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <div className="input-group">
          <input className="form-control col-md-12" ref={this.setValue} />
          <span className="input-group-btn">
            <button type="submit" className="btn">Add</button>
          </span>
        </div>
        <br />
      </form>
    );
  }
}

TodoForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default TodoForm;
