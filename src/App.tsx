import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';

function App() {


    let [tasks1, setTasks1] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Rest API", isDone: false },
        { id: 5, title: "GraphQL", isDone: false },

    ])

    const addTask = (inputValue: string) => {
        const newTask = { id: 6, title: inputValue, isDone: false }
        setTasks1([newTask, ...tasks1])
    }

    const [filterValueKey, setFilterVakueKey] = useState("All")


    const removeTask = (taskID: number) => {
        setTasks1(tasks1.filter(el => el.id !== taskID))
    }


    const filterTasks = (filterKey: string) => {
        setFilterVakueKey(filterKey)
    }

    const fooFilter = () => {
        let filteredTasks = tasks1
        if (filterValueKey === 'Active') {
            return filteredTasks = tasks1.filter(el => el.isDone)
        }
        if (filterValueKey === 'Completed') {
            return filteredTasks = tasks1.filter(el => !el.isDone)
        }
        return filteredTasks

    }

    return (
        < div className="App" >
            <Todolist
                title="What a learn"
                tasks={fooFilter()}
                removeTask={removeTask}
                filterTasks={filterTasks}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
function v1(): any {
    throw new Error('Function not implemented.');
}

