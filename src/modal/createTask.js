import {useState} from "react";
import {useMainContext} from "../context/MainContext";

const CreateTask = ({setModal}) => {

    const [taskName, setTaskName] = useState("")
    const [priority, setPriority] = useState('1')
    const [desc, setDesc] = useState()

    const {taskList, setTaskList} = useMainContext();

    const options = [
        {value: 1, text: 'Acil'},
        {value: 2, text: 'Önemli'},
        {value: 3, text: 'Normal'},
    ];



    const handleChange = (e) => {
        const {name, value} = e.target
        if(name === 'title'){
            setTaskName(value)
        }else if(name === 'priority' ){
            setPriority(value)
        }else if(name === 'desc'){
            setDesc(value)
        }
    }


    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj['Priority'] = priority
        taskObj["Description"] = desc
        saveTask(taskObj)
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        setTaskList([...taskList])
        localStorage.setItem('taskList', JSON.stringify(tempList))
        setModal(false)
    }


    return(
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="mt-3">
                        <div className="mt-2 text-center sm:ml-4 sm:text-left">
                            <h4 className="text-lg font-medium text-gray-800 border-b-2">
                                Yeni İş Oluştur
                            </h4>
                            <form onSubmit={handleSave}>
                                <div className="mt-4 flex flex-col gap-2">
                                    <div>
                                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">İşin Adı</label>
                                        <input type="text"
                                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                               id="title"
                                               name='title'
                                               placeholder='Yapılacak işin adı'
                                               value={taskName}
                                               onChange={handleChange}
                                               required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="grid-state" className="block mb-2 text-sm font-medium text-gray-900">Öncelik Seviyesi</label>
                                        <select className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-state"
                                                value={priority}
                                                name="priority"
                                                onChange={handleChange}
                                                required
                                        >
                                            {options.map(option => (
                                                <option key={option.value} value={option.value}
                                                        className="checked:bg-teal-100 bg-teal-500 hover:bg-red-100">
                                                    {option.text}
                                                </option>
                                            ))}

                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message"
                                               className="block mb-2 text-sm font-medium text-gray-900">
                                            Yapılacak İş
                                        </label>
                                        <textarea id="message" rows="4"
                                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                  placeholder="Yapılacak işin tanımı"
                                                  value={desc}
                                                  name="desc"
                                                  maxLength={255}
                                                  onChange={handleChange}
                                                  required
                                        >
                                        </textarea>
                                    </div>

                                </div>

                                <div className="items-center gap-2 mt-3 sm:flex">
                                    <button
                                        type='submit'
                                        className="w-full mt-2 p-2.5 flex-1 text-white bg-teal-500 rounded-md outline-none ring-offset-2 ring-teal-500 focus:ring-2 hover:bg-teal-700"
                                    >
                                        Ekle
                                    </button>
                                    <button
                                        className="w-full mt-2 p-2.5 flex-1 text-white bg-teal-500 rounded-md outline-none ring-offset-2 ring-teal-500 focus:ring-2 hover:bg-teal-700"
                                        onClick={() =>
                                            setModal(false)
                                        }
                                    >
                                        Vazgeç
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTask