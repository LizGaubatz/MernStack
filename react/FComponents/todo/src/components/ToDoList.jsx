const ToDoList = (props) => {
    const taskList = [...props.task];

    const checkTask = (e, i) => {
        taskList[i].complete ?
        taskList[i].complete = false :
        taskList[i].complete = true;
        props.updateTaskList(taskList);
    };

    const deleteTask = (id) => {
        const filteredList = taskList.filter((taskList, i) => {
            return i !== id;
        });
        props.updateTaskList(filteredList);
    };

    return (
        <div className="pb-2">
            {
                taskList.map((task, i) => {
                    let classAdds = "";
                    task.complete && (classAdds += "strike");
                    return (
                        <div>
                            <div className={`${classAdds}`}>
                                <p key={i} className={`${classAdds}`}>
                                </p>
                                <input onChange={(e) => checkTask(e, i)} type="checkbox" checked={task.complete} />{task.taskItem}
                            </div>
                            <input onClick={(e) => deleteTask(i)} type="submit" value="Delete" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ToDoList