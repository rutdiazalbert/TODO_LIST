import React, { useState, useEffect, useRef } from "react";

const TodoFormStudies = ({onSubmit, edit}) => {
  const [input, setInput] = useState(edit ? edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
      inputRef.current.focus();
  })

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
    }

    const handleChange = e => {
        setInput(e.target.value)
    }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>

    {edit ? (<>
        <input
          type="text"
          placeholder={input}
          value={input}
          name="text"
          className="todo-input edit"
          onChange={handleChange}
          ref={inputRef}
          autoComplete="off"
        />
        <button type="submit" className="todo-button edit">Update</button>
    </>) : (
        <>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
          autoComplete="off"
        />
        <button type="submit" className="todo-button">Add</button>
    </>
    )}
    </form>
  );
};

export default TodoFormStudies;
