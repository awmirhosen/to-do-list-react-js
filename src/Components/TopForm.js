import React, {useContext, useState} from 'react';
import { taskContext } from './taskContext';


const TopForm = () => {
    const [task, setTask] = useState('')
    const {taskItems, setTaskItems} = useContext(taskContext);

    const handleSetTask = (e) => {
        setTask(e.target.value)
    }

    const  handleAddTask = (e) => {
        e.preventDefault();
        setTaskItems([... taskItems, {id : Math.random(), title:task, done : false } ])
        setTask('');
    }


    return(
        <>
            <p className=' w-100 text-center display-4 text-custom1'>
                To Do List
            </p>

            <section className='design-border'>
                {/*this is for design  */}
            </section>
            <section className='w-100 d-flex justify-content-center pt-5'>
                <form action="#" className='w-100 d-flex align-items-center justify-content-center' onSubmit={handleAddTask}>
                    <input type="text" className=' p-2 w-75 mx-2 text-input rounded-3' value={task} onChange={handleSetTask}/>
                    <input type="submit" className='btn btn-light py-3' value='Add' />
                </form>
            </section>

        </>
    )
}

export default TopForm;