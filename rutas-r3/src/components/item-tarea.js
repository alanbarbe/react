import React from 'react';
import { Link } from 'react-router-dom';

const ItemTarea = ({ task }) => {
  return (
    <li>
      <Link to={`/task/${task.id}`}>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
      </Link>
    </li>
  );
};

export default ItemTarea;
