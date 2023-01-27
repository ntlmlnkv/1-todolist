import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { Button } from "./Button/Button";
import styles from './Todolist.module.css'


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
    changeStatus: (taskID: number, eventStatus: boolean) => void
}

export function Todolist(props: PropsType) {
    let [inputValue, setInputValue] = useState('')
    const [error, setError] = useState<string | null>(null)

    const addTaskHandler = () => {
        if (inputValue.trim() !== '') {
            props.addTask(inputValue.trim())
            setInputValue('')
        } else {
            setError('Title is required')
        }
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
        setError(null)

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

                <input
                    className={error ? styles.error : ''}
                    value={inputValue}
                    onChange={onChangeHandler}
                    onKeyDown={onKeyPressHandler}
                />


                {/* <input value={inputValue} onChange={(event) => setInputValue(event.currentTarget.value)} /> */}
                {/* <button onClick={addTaskHandler}>+</button> */}
                <Button name={'+'} callBack={addTaskHandler} />
            </div>
            {error && <div className={styles.errorMessage}>{error}</div>}
            <ul>
                {
                    props.tasks.map((el: TaskType) => {
                        const removeTaskHandler = () => {
                            props.removeTask(el.id)
                        }
                        const changeStatusHandler = (event: ChangeEvent) => {
                            props.changeStatus(el.id, el.isDone)
                        }
                        return (
                            <li key={el.id} className={el.isDone ? styles.isDone : ''}>
                                {/* <button onClick={removeTaskHandler} >X</button> */}
                                <input type="checkbox" checked={el.isDone} onChange={changeStatusHandler} />
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

