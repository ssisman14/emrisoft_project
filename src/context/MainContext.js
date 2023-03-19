import {createContext, useState, useContext, useEffect} from "react";

const MainContext =  createContext();

function getInitialTaskListState() {
    const task = localStorage.getItem('taskList')
    return task ? JSON.parse(task) : []
}

const MainProvider = ({children}) => {

    const [taskList, setTaskList] = useState(getInitialTaskListState)
    const [taskListFilter, setTaskListFilter] = useState([])


    const data = {
        taskList, setTaskList,
        taskListFilter, setTaskListFilter


    }

    return (
        <MainContext.Provider value={data}>
            {children}
        </MainContext.Provider>
    )
}

export const useMainContext = () => useContext(MainContext)

export default MainProvider