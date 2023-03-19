import {useEffect, useState} from "react";
import {useMainContext} from "../context/MainContext";

const ListAndFilter = () => {
    const {taskList, setTaskListFilter} = useMainContext();
    const [sort, setSort] = useState('öncelik')
    const [filter, setFilter] = useState()

    useEffect(()=> {
        if(sort === 'isim'){
            let sortList = taskList.sort((a, b) => {
                const nameA = a.Name.toUpperCase();
                const nameB = b.Name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            })
            setTaskListFilter([...sortList])
        }else {
            let sortList = taskList.sort((a, b) => a.Priority - b.Priority);
            setTaskListFilter([...sortList])
        }
    },[sort])

    useEffect(()=> {
        if(filter){

            let filterList = taskList.filter(i => i.Priority === filter)
            setTaskListFilter([...filterList])
        }
    },[filter])

    const handleChange = (e) => {
        const {name, value} = e.target
        if(name === 'sort'){
            setSort(value)
        }else if(name === 'filter'){
            setFilter(value)
        }
    }


    return(
        <div className={'container px-10 py-2 mx-auto flex justify-between'}>
            <div>
                <label htmlFor="grid-state" className="block mb-2 text-sm font-medium text-gray-900">Öncelik Seviyesi</label>
                <select className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-1 px-1 pr-1 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                        value={sort}
                        name="sort"
                        onChange={handleChange}
                >

                    <option value='öncelik' className="checked:bg-teal-100 bg-teal-500 hover:bg-red-100">
                        Önem Derecesi
                    </option>
                    <option value='isim' className="checked:bg-teal-100 bg-teal-500 hover:bg-red-100">
                        İsim
                    </option>
                    )

                </select>
            </div>
            <div>
                <label htmlFor="grid-state" className="block mb-2 text-sm font-medium text-gray-900">Filtreleme</label>
                <select className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-1 px-1 pr-1 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                        value={filter}
                        name="filter"
                        onChange={handleChange}
                >
                    <option className="checked:bg-teal-100 bg-teal-500 hover:bg-red-100">
                        Öncelik seviyesi
                    </option>
                    <option value={1} className="checked:bg-teal-100 bg-teal-500 hover:bg-red-100">
                        Yüksek Öncelikli
                    </option>
                    <option value={2} className="checked:bg-teal-100 bg-teal-500 hover:bg-red-100">
                        Önemli
                    </option>
                    <option value={3} className="checked:bg-teal-100 bg-teal-500 hover:bg-red-100">
                        Normal
                    </option>
                    )

                </select>
            </div>


        </div>
    )
}

export default ListAndFilter