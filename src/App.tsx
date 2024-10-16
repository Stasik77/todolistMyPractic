import React from 'react';
import './App.css';
import {ToDoList} from "./TodoDoList";

function App() {

    const ToDoListTitle_1 = "What to learn"
    const ToDoListTitle_2 = "Songs"
    const ToDoListTitle_3 = "Books"

    const task1 = [
        {id: 1, title: "Html", isDone: false},
        {id: 2, title: "js", isDone: true},
        {id: 3, title: "React", isDone: true},
    ]
    const task2 = [
        {id: 1, title: "Hello world", isDone: false},
        {id: 2, title: "I am Happy'", isDone: true},
        {id: 3, title: "Yo", isDone: true},
        {id: 3, title: "Yo", isDone: true},
    ]
    const task3 = [
        {id: 1, title: "Tom Soyer", isDone: false},
        {id: 2, title: "Littel Prince ", isDone: true},
        {id: 3, title: "Vy Vt", isDone: true},
    ]



    return (
        <div className="App">
            <ToDoList title={ToDoListTitle_1} tasks={task1}/>
            <ToDoList title={ToDoListTitle_2}  tasks={task2}/>
            <ToDoList title={ToDoListTitle_3}  tasks={task3}/>
        </div>
    );
}

export default App;
