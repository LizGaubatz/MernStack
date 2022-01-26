import React, { useState } from 'react'

const ListForm = (props) => {
    const [newTask, setNewTask] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Test Submit");
        const task = {
            taskItem: newTask,
            complete: false
        }
        props.updateTaskList(task);
        setNewTask({
            taskItem: ""
        });
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <input onChange={(e) => { setNewTask(e.target.value) }} type="text" name="taskItem" value={newTask.taskItem} />
                </div>
                <div>
                    <button disabled={newTask.length === 0} type="submit">New Task</button>
                </div>
            </form>
        </div>
    )
}

export default ListForm