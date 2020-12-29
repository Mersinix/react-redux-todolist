import React, { useState, useEffect, useRef } from 'react';
import {useSelector,useDispatch} from 'react-redux';

function TodoForm(props) {
  const [input, setInput] = useState();

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };


  return (
    <form  className='todo-form'>
      {/* {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : ( */}
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button  className='todo-button'>
            Add todo
          </button>
        </>
      {/* )} */}
    </form>
  );
}

export default TodoForm;
