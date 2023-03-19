import {useState,memo} from "react";
import CreateTask from "../modal/createTask";
import {useMainContext} from "../context/MainContext";

const Title = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const createModalToggle = () => {
        setModalIsOpen(true)
    }



    return(
        <div className="w-full flex justify-center h-40 bg-teal-100 items-center flex-col gap-5  ">
            <h1 className="text-3xl font-extrabold leading-none">Todo List App</h1>
            <button
                className="rounded-full bg-teal-500 p-1.5 drop-shadow-2xl hover:bg-teal-700"
            onClick={createModalToggle}>
                Create Task
            </button>

            {modalIsOpen && <CreateTask setModal={setModalIsOpen}/>}
        </div>
    )
}

export default memo(Title)