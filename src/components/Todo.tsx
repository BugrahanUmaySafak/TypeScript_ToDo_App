import React, { useState } from 'react';
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../css/Todo.css';
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodoById } from '../redux/todoSlice';
import { FaCheck } from "react-icons/fa";


interface TodoProps {
        todoProps: TodoType
}

const Todo: React.FC<TodoProps> = ({ todoProps }) => {

        const { id, content } = todoProps;

        const [editable, setEditable] = useState<boolean>(false)

        const [newTodo, setNewTodo] = useState<string>(content)

        const dispatch = useDispatch()

        const handleRemoveTodo = () => {
                dispatch(removeTodoById(id))
        }

        const handleUpdateTodo = () => {
                const payload = {
                        id: id,
                        content: newTodo
                }
                dispatch(updateTodoById(payload))
                setEditable(false)
        }

        return (
                <div className='todo'>

                        {editable ? <input className='update-input' type='text' value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} /> : <div> {content} </div >}

                        <div className='todo-icon'>

                                <IoMdRemoveCircleOutline onClick={handleRemoveTodo} style={{ marginRight: '10px' }} />

                                {editable ? <FaCheck onClick={handleUpdateTodo} /> : <FaEdit onClick={() => setEditable(!editable)} />}

                        </div>
                </div>
        );
};

export default Todo;
