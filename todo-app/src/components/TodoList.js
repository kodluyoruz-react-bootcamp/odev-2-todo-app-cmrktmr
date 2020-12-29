import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos,setTodos }) => {
  return (
    <div>
      <section className="todoapp">
        <section className="main">
          <ul className="todo-list">
            {todos.map((todo) => (
              <Todo
                setTodos={setTodos}
                todos={todos}
                key={todo.id}
                text={todo.text}
                todo={todo}
              />
            ))}
          </ul>

          <footer className="footer">
            {/* This should be `0 items left` by default */}
            <span className="todo-count">
              <strong>2</strong>
              items left
            </span>
            <ul className="filters">
              <li>
                <a className="selected" value="all">
                  All
                </a>
              </li>
              <li>
                <a value="active">Active</a>
              </li>
              <li>
                <a value="completed">Completed</a>
              </li>
            </ul>
            {/* Hidden if no completed items are left ↓ */}
            <button className="clear-completed">Clear completed</button>
          </footer>
        </section>
      </section>
    </div>
  );
};

export default TodoList;
