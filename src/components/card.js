import Edit from '../svg/edit-solid.svg'
import Delete from '../svg//trash-alt-solid.svg'
import {useState} from "react";
import EditTask from "../modal/editTask";
const Card = ({name,priority, desc, index, deleteTask}) => {
    const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);

    const handleDelete = () => {
        deleteTask(index)
    }

    const handleUpdate = () => {
        setUpdateModalIsOpen(true)

    }

    return(

        <div className="h-full p-4 w-full lg:w-1/4 ">
            <div className=" bg-gray-100  relative">
                <div className={`h-1 ${priority == 1 ? 'bg-red-400' : priority == 2 ? 'bg-amber-400' : 'bg-green-400'}`}/>
                <div className={'border-b '}>
                    <h2 className={"mt-2 mb-2 font-bold pl-4"}>{name}</h2>
                </div>
                <div className={'pl-4 h-48'}>
                    {desc}
                </div>
                <div className={'absolute right-2 bottom-2 '}>
                  <button className={'w-7 h-7 mr-3'} onClick={handleUpdate}>
                      <img  src={Edit} alt="edit-text"/>
                  </button>
                    <button className={'w-6 h-6'} onClick={handleDelete}>
                        <img  src={Delete} alt="edit-text"/>
                    </button>
                </div>
            </div>
            {updateModalIsOpen && <EditTask setUpdateModal={setUpdateModalIsOpen} index={index}/>}
        </div>

    )
}

export default Card