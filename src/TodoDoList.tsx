import React from "react";
import {Button} from "./Button";


type ToDoLisTypeProps = {
    title: string;
    tasks: Array<TaskType>;
}

type TaskType = {
    id: number,
    title: string,
    isDone: boolean,

}


export const ToDoList = (props: ToDoLisTypeProps) => {


    const tasksList: Array<JSX.Element> = props.tasks.map((task: TaskType) => {
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
            </li>
        )
    });

        return (
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <Button title={"+"}/>
                </div>
                <ul>
                    {/*{props.tasks.map((task:TaskType, id: number) => {*/}
                    {/*       return (*/}
                    {/*           <li key={task.id}>*/}
                    {/*              <input type="checkbox" checked={task.isDone}/>*/}
                    {/*                <span>{task.title}</span>*/}
                    {/*          </li>*/}
                    {/*        )*/}
                    {/*    }*/}
                    {/*)}*/}
                    {tasksList}
                </ul>
                <div>
                    <Button title={"All"}/>
                    <Button title={"Active"}/>
                    <Button title={"Completed"}/>

                </div>
            </div>
        )


    }

