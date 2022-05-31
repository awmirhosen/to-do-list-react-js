import React, {useState} from 'react';
import TopForm from './Components/TopForm';
import TaskItems from "./Components/TaskItems";
import { taskContext } from "./Components/taskContext";

function App() {

    const [taskItems, setTaskItems] = useState([

    ])

  return (
    <section>
          <section className="container w-100 h-100 p-2 ">
              <section className='main mt-5 p-4 rounded-3 header '>
                  <taskContext.Provider value={{
                      taskItems,
                      setTaskItems
                  }}>
                  {/*top form component add*/}
                  <TopForm />
                  {/*items list group*/}
                  <TaskItems />
                  </taskContext.Provider>

              </section>
          </section>
      </section>

  )
}

export default App;
