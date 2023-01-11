import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';

function App() {

    // let tasks1 = [
    //     { id: 1, title: "HTML&CSS", isDone: true },//0
    //     { id: 2, title: "JS", isDone: true },//1
    //     { id: 3, title: "ReactJS", isDone: false },//2
    // ]

    let [tasks1, setTasks1] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },//0
        { id: 2, title: "JS", isDone: true },//1
        { id: 3, title: "ReactJS", isDone: false },//2
    ])

    const [filterValueKey, setFilterVakueKey] = useState("All")


    const removeTask = (taskID: number) => {
        setTasks1(tasks1.filter(el => el.id !== taskID))
    }

    
    const filterTasks = (filterKey: string) => {
        setFilterVakueKey (filterKey)
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
            />
        </div>
    );
}

export default App;
