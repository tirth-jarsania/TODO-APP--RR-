import React,{ useState } from 'react'
import './Input.css';
import {useDispatch} from 'react-redux';
import {saveTodo} from '../features/todoSlice';

function Input() {
    const [input , setInput] = useState('');
    const dispatch = useDispatch();

    const addTodo = () => {

        if( input !== '' ){
            dispatch(saveTodo( {
                item: input,
                done: false,
                id: Date.now()
            }))
            setInput('');
        }
        

    } 
    return (
        <div className='input'>
            <input type="text" value={input} onChange={e=>setInput(e.target.value)} />
            <button onClick={addTodo}>Add Task</button>
        </div>
    )
}

export default Input;
