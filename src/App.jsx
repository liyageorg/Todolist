import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setTodos] = useState([]); // State for the list of todos
  const [toDo, setToDo] = useState(''); // State for the input field

  // Function to handle deleting a todo
  const deleteTodo = (id) => {
    setTodos(toDos.filter((obj) => obj.id !== id));
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday </h2>
      </div>
      <div className="input">
        {/* Input field for adding new todo */}
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        {/* Add todo button */}
        <i
          onClick={() => {
            if (toDo.trim()) {
              setTodos([
                ...toDos,
                { id: Date.now(), text: toDo, status: false },
              ]);
              setToDo(''); // Clear input after adding
            }
          }}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {/* Loop through the todos and display each one */}
        {toDos.map((obj) => {
          return (
            <div className="todo" key={obj.id}>
              <div className="left">
                <input
                  onChange={(e) => {
                    setTodos(
                      toDos.map((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                  checked={obj.status}
                  type="checkbox"
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  className="fas fa-times"
                  onClick={() => deleteTodo(obj.id)}
                ></i>
              </div>
            </div>
          );
        })}

        {/* Display completed todos */}
        <div className="completed">
          <h3>Completed Tasks:</h3>
          {toDos.map((obj) => {
            if (obj.status) {
              return <h4 key={obj.id}>{obj.text}</h4>;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;