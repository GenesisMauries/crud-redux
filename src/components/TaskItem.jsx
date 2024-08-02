import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../features/tasks/tasksSlice';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateTask({ ...task, title: editedTitle }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <button onClick={handleUpdate}>Guardar</button>
        </>
      ) : (
        <>
          <span>{task.title}</span>
          <button onClick={() => setIsEditing(true)}>Editar</button>
        </>
      )}
      <button onClick={handleDelete}>Eliminar</button>
    </li>
  );
};

export default TaskItem;