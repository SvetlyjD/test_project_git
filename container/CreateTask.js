import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGoods, deleteAllTask, removeTask } from "../store/taskSlice";

function CreateTask() {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    function addToGood() {
        dispatch(addGoods(value));
        setValue("");
    }
    function removeAllTask() {
        dispatch(removeTask("1"))
    }

    function deleteAllTasks() {
        dispatch(deleteAllTask("1"))
    }

    return (
        <div className="container1">
            <input type="text"
                className="inputTask"
                placeholder="Add Task..."
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button className="taskAdd" onClick={() => addToGood()}>Create Task</button>
            <button className="taskDel" onClick={() => removeAllTask()}>Remove All Task</button>
            <button className="taskDel" onClick={() => deleteAllTasks()}>Delete All Task</button>
        </div >
    )
}

export default CreateTask;