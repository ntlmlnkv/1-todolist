import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { Button } from "./Button/Button";


type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

type PropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
    filterTasks: (filterKey: string) => void
    addTask: (inputValue: string) => void
}

export function Todolist(props: PropsType) {
    let [inputValue, setInputValue] = useState('')

    const addTaskHandler = () => {

        props.addTask(inputValue)
        setInputValue('')
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)

    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskHandler()
        }

    }

    const changeFilterAll = () => {
        props.filterTasks("All")
    }
    const changeFilterActive = () => {
        props.filterTasks("Active")
    }

    const changeFilterCompleted = () => {
        props.filterTasks("Completed")

    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={inputValue} onChange={onChangeHandler} onKeyDown={onKeyPressHandler} />
                {/* <input value={inputValue} onChange={(event) => setInputValue(event.currentTarget.value)} /> */}
                {/* <button onClick={addTaskHandler}>+</button> */}
                <Button name={'+'} callBack={addTaskHandler} />
            </div>
            <ul>
                {
                    props.tasks.map((el: TaskType) => {
                        const removeTaskHandler = () => {
                            props.removeTask(el.id)
                        }

                        return (
                            <li key={el.id}>
                                {/* <button onClick={removeTaskHandler} >X</button> */}
                                <Button name={'X'} callBack={() => removeTaskHandler()} />
                                <input type="checkbox" checked={el.isDone} />
                                <span>{el.title}</span>
                            </li>
                        )
                    })}


                {/* <li><input type="checkbox" checked={props.tasks[0].isDone} /> <span>{props.tasks[0].title}</span></li> */}
                {/* <li><input type="checkbox" checked={props.tasks[1].isDone} /> <span>{props.tasks[1].title}</span></li> */}
                {/* <li><input type="checkbox" checked={props.tasks[2].isDone}  /> <span>{props.tasks[2].title}</span></li> */}


            </ul>
            <div>
                <Button name={'All'} callBack={changeFilterAll} />
                <Button name={'Active'} callBack={changeFilterActive} />
                <Button name={'Completed'} callBack={changeFilterCompleted} />

            </div>
        </div>
    )
}

