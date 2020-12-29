import React from "react";

const Form = ({setInputText,todos,setTodos,inputText}) => {

const inputTextHandler =(e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
};

const submitTodoHandler = (e) =>{
e.preventDefault();
setTodos([...todos, {text:inputText, completed: false,id: Math.random()*1000 },]);

setInputText("");

}
  return (

    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={submitTodoHandler}>
            <input
            value={inputText}
            onChange={inputTextHandler}
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              
            />
           <button onChange={submitTodoHandler}></button>
          </form>
        </header>

        <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">
        Mark all as complete
      </label>
    </section>
      </section>
    
      </div>
    
  );
};
export default Form;
