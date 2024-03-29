import React, { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
  interface Todo {
    id: number;
    title: string;
    description: string;
    due: string;
    completed: boolean;
  }
  const API = "http://localhost:4000/a5/todos";
  const [todo, setTodo] = useState<Todo>({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({
      ...todo,
      description: e.target.value,
    });
  };

  const handleCompletedChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({
      ...todo,
      completed: e.target.checked,
    });
  };

  const [todos, setTodos] = useState<Todo[]>([]);
  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  
  const removeTodo = async (todo: Todo) => {
    const response = await axios.get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };

  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };

  const fetchTodoById = async (id: number) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };

  

  return (
    <div>
      <h3>Working with Arrays</h3>
      <ul className="list-group">
      <button className="btn btn-primary"onClick={createTodo} >
        Create Todo
      </button>
      <button className="btn btn-primary" onClick={updateTitle} >
        Update Title
      </button>

        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            
            {todo.title}
            <button className="btn btn-warning m-2" onClick={() => fetchTodoById(todo.id)} >
          Edit
        </button>
            <button className="btn btn-primary m-2"onClick={() => removeTodo(todo)} >
          Remove
        </button>
          </li>
        ))}
      </ul>

      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
      />
      <input
        type="text"
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />
      <h3>Updating an Item in an Array</h3>
      <a className="btn btn-primary" href={`${API}/${todo.id}/title/${todo.title}`}>
        Update Title to {todo.title}
      </a>

      <a className="btn btn-danger m-2" href={`${API}/${todo.id}`}>Get Todo by ID</a>
      <h3>Filtering Array Items</h3>
      <a className="btn btn-primary" href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <h3>Creating new Items in an Array</h3>
      <a className="btn btn-primary" href={`${API}/create`}>
        Create Todo
      </a>
      <h3>Deleting from an Array</h3>
      <a className="btn btn-primary" href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>
      <div>
      <h3>Working with Arrays</h3>
      <h4>Editing Description and Completed Properties</h4>
      <input
        type="text"
        value={todo.description}
        onChange={handleDescriptionChange}
      />
      <label>
        Completed:
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCompletedChange}
        />
      </label>
      <br />
      <a
        className="btn btn-primary"
        href={`${API}/${todo.id}/description/${encodeURIComponent(
          todo.description
        )}`}
      >
        Update Description
      </a>
      <a
        className="btn btn-primary m-2"
        href={`${API}/${todo.id}/completed/${todo.completed}`}
      >
        Update Completed
      </a>
    </div>
    </div>
  );
}
export default WorkingWithArrays;
