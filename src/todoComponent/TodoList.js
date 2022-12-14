import { useEffect } from "react";

const TodoList = ({ todos }) => {
  useEffect(() => {
    if (window) window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-list">
      {todos.map((todo) => (
        <div className="blog-preview" key={todo.id}>
          <h2>{todo.text}</h2>
          <div>{todo.checked ? "Done!" : "Done Yet"}</div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
