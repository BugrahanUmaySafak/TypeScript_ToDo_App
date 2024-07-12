import React, { useState } from 'react'
import '../css/TodoCreate.css'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice'
import { TodoType } from '../types/Types'

function TodoCreate() {

        const dispatch = useDispatch()

        const [newTodo, setNewTodo] = useState<string>('')

        const handleCreateTodo = () => {
                if (newTodo.trim().length == 0) {
                        alert("Create ToDo")
                        return
                }

                const payload: TodoType = {
                        id: Math.floor(Math.random() * 12312),
                        content: newTodo
                }
                dispatch(createTodo(payload))
                setNewTodo(' ')
        }

        return (
                <div className='todo-create' >
                        <input value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} placeholder='Write a ToDo' className='todo-create-input' type="text" />
                        <button onClick={handleCreateTodo} className='todo-create-button' >Create ToDo</button>
                </div>
        )
}

export default TodoCreate