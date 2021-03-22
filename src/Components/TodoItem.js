import React from 'react'
import './TodoItem.css'
import { Button, Checkbox}  from '@material-ui/core';
import {useDispatch} from 'react-redux';
import { setCheck,deleteTodo } from '../features/todoSlice';

function TodoItem({ name,done,id }) {
    const dispatch = useDispatch();

    const handleCheck = () => {
         dispatch( setCheck(id) )
    }
    const handleClick = () => {
        dispatch( deleteTodo(id) )
    }
    return (
        <div className="todoItem">
            <Checkbox
                checked={done}
                color="primary"
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <p className={done && 'todoItem--done'}>{name}</p>
            <Button 
                variant="outlined" 
                color="primary"
                onClick={handleClick}>
                Delete
            </Button>
        </div>
    )
}

export default TodoItem
