import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { MdDone } from 'react-icons/md';
import {useSelector,useDispatch} from 'react-redux';
import { Delete } from '../Redux/actionTypes';

const Todo = () => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  
 const list = useSelector(state => state.tasks)
 const dispatch = useDispatch()
const del=(a)=>dispatch(Delete(a.id))


  if (edit.id) {
    return <TodoForm edit={edit}  />;
  }

  return list.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} >
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={()=>del(todo)}
          className='delete-icon'
        />
        <TiEdit
         
          className='edit-icon'
        />
        <MdDone  />
      </div>
    </div>
  )
  );
};

export default Todo;