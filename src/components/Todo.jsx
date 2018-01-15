import React from 'react';
import PropTypes from 'prop-types';

function Todo(props) {
  function remove() {
    props.onClick(props.task.id);
  }

  return (
    <li className="list-group-item clearfix">
      {props.task.text}
      <span>
        <button onClick={remove} className="btn pull-right">remove</button>
      </span>
    </li>
  );
}

Todo.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Todo;
