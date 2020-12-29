import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li>
        <div className={`view ${todo.completed ? "completed" : ""}`}>
          <input onClick={completeHandler} type="checkbox" className="toggle" />
          <label> {text} </label>
          <button onClick={deleteHandler} className="destroy" />
        </div>
      </li>
    </div>
  );
};

export default Todo;
