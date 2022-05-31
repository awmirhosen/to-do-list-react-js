import React from "react";
import { useContext } from "react";
import { taskContext } from './taskContext';


const TaskItems = () => {

    const { taskItems, setTaskItems } = useContext(taskContext);

    const handleSetStatus = (id) => {
        const index = taskItems.findIndex( array => array.id === id )
        let newTaskItems = [ ... taskItems];
        newTaskItems[index].done = !newTaskItems[index].done;
        setTaskItems(newTaskItems);
    }

    const handleDeleteTask = (id) => {
        let newTask = taskItems.filter( array => array.id !== id)
        setTaskItems(newTask);
    }


    if (taskItems.length){
    return(
     <>
         <section className='w-100 mt-5'>
             <ul className="list-group list-group-flush">
                 {
                     taskItems.map(data =>(
                 <li className={`list-group-item d-flex text-light justify-content-between align-items-center ${ data.done  ? 'bg-custom2' : 'bg-custom' } fs-4`} key={Math.random()}>
                     {data.title}
                     <div className='task-btn'>
                         {
                             data.done ? (
                                 <img src="/assets/images/signs/cancel.svg" className='mx-2 pointer' width='40px' alt="" onClick={() => handleSetStatus(data.id) }  />
                             ) : (
                                 <img src="/assets/images/signs/tik.svg" className='pointer mx-2' width='40px' alt="" onClick={() => handleSetStatus(data.id) } />
                             )
                         }
                         <img src="/assets/images/signs/trash.svg" className='pointer mx-2' width='40px' alt=""   onClick={() => handleDeleteTask(data.id) }   />
                     </div>
                 </li>
                     ))
                 }
             </ul>
         </section>
     </>
    )}else {
        return (
            <p className='mt-5 fs-3 w-100 text-center text-light border p-3'>There is Nothing To Do  <br/> Add something </p>
        )
    }

}

export default TaskItems;