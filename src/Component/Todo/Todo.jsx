import React, { useState } from "react";

export function Todo() {
  const [count, setcount]=useState(1)
  const [todos, settodos] = useState([]);
  const [todo, settodo] = useState({});

  const add = () => {
    settodos([...todos, todo]);
    settodo({mass:""});
    setcount(count+1)
  };

  function handlEdit(event) {
    // console.log(event.target.previousElementSibling);
    if(event.target.innerText=="edit"){
        event.target.previousElementSibling.setAttribute('contenteditable','true')
        event.target.innerText="save"
    }
   else if(event.target.innerText=="save"){
        event.target.previousElementSibling.setAttribute('contenteditable','false')
        event.target.innerText="edit"
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={todo.mass}
          onChange={(e) => settodo(
            {mass:e.target.value,
            id:count}
            )}
        />
        <button onClick={add}>Add</button>
      </div>
      <div>
        {todos.map((x) => {
          return (
            <div>
              <span>{x.mass}</span>

              <button onClick={handlEdit}>edit</button>

              <button
                onClick={() => {
                  let item = todos.filter((value) => value.id !== x.id);
                  settodos([...item]);
                }}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
