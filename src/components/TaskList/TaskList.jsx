import css from "./TaskList.module.css";

export const TaskList = ({ todos, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map(({ id, text }) => {
        return (
          <li className={css.item} key={id}>
            <p>{text}</p>
            <button onClick={() => onDeleteTodo(id)} className={css.button}>
              Completed
            </button>
          </li>
        );
      })}
    </ul>
  );
};
