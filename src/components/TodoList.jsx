import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

function TodoList(props) {
  const todoList = props.tasks.map((task) => {
    return (
      <Todo key={task.id}task={task} onClick={props.onClick} />
    );
  });

  return (
    <div>
      <ul className="list-group" style={{ marginTop: '30px' }}>{todoList}</ul>
    </div>
  );
}

// TodoList.defaultProps = {
//   tasks: [],
// };

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TodoList;
