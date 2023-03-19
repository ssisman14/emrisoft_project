import Card from "./card";
import {useMainContext} from "../context/MainContext";
import {useEffect, useState} from "react";


const CardList = () => {
    const {taskList, setTaskList, taskListFilter, setTaskListFilter} = useMainContext();


    useEffect(()=> {
        setTaskListFilter([...taskList])
    },[taskList])

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList([...taskList])
    }



    return(

        <div className="container px-5 py-5 mx-auto flex flex-wrap">
            {taskListFilter && taskListFilter.map((i,index)=> {
                            return(
                                <Card key={index} name={i.Name} priority={i.Priority} desc={i.Description}
                                      index={index} deleteTask={deleteTask}/>
                            )
                        })}
        </div>
    )
}

export default CardList