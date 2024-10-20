import React from 'react'
export const GlobalContext = React.createContext({})

export interface Task {
  id?: number;
  title: string;
  dueDate: any;
  priority: string;
  status: string;
}


const GlobalStateContext = ({children} : {children:React.ReactNode}) => {

  const [tasks, setTasks] = React.useState<Task[]>([
    { id: 1, title: 'Design homepage', dueDate: '2024-10-21', priority: 'High', status: 'In Progress' },
    { id: 2, title: 'Write blog post', dueDate: '2024-10-22', priority: 'Medium', status: 'Pending' },
  ]);
  function addTask(task : Task){
    setTasks([...tasks, task])
  }
  const updateTask = (id: number, updatedTask: Task) => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === id ? updatedTask : task))
    );
  };
    
  return (
    <GlobalContext.Provider value={{tasks , addTask, updateTask , setTasks}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext