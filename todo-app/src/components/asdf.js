<div className="todo">
<li className="completed">
  <div className="view">
    <input type="checkbox" onClick={completeHandler} className={`toggle ${todo.completed ? "completed" :""}`} />
    <label > {text}</label>
    <button onClick={deleteHandler} className="destroy" />
  </div>
</li>

</div>