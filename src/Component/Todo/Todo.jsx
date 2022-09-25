import React, { useState } from "react";

export function Todo() {
  const [todos, settodos] = useState([]);
  const [todo, settodo] = useState("");

  const add = () => {
    settodos([...todos, todo]);
    settodo("");
  };

  function handlEdit(event,ele) {
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
          value={todo}
          onChange={(e) => settodo(e.target.value)}
        />
        <button onClick={add}>Add</button>
      </div>
      <div>
        {todos.map((x) => {
          return (
            <div>
              <span>{x}</span>

              <button onClick={handlEdit}>edit</button>

              <button
                onClick={() => {
                  let item = todos.filter((value) => value !== x);
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
