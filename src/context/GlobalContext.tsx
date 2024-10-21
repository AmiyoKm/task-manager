import React, { createContext, useState, useCallback } from 'react'

export interface Task {
  id: number;
  title: string;
  dueDate: string | Date;
  priority: string;
  status: string;
}

interface GlobalContextType {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id'>) => void;
  updateTask: (id: number, updatedTask: Task) => void;
  removeTask: (id: number) => void;
}

export const GlobalContext = createContext<GlobalContextType>({
  tasks: [],
  addTask: () => {},
  updateTask: () => {},
  removeTask: () => {},
});

const GlobalStateContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = useCallback((task: Omit<Task, 'id'>) => {
    setTasks(prevTasks => [
      ...prevTasks,
      {
        ...task,
        id: prevTasks.length + 1,
        dueDate: task.dueDate instanceof Date ? task.dueDate.toISOString().split('T')[0] : task.dueDate
      }
    ]);
  }, []);

  const updateTask = useCallback((id: number, updatedTask: Task) => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === id ? updatedTask : task))
    );
  }, []);

  const removeTask = useCallback((id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }, []);
    
  return (
    <GlobalContext.Provider value={{ tasks, addTask, updateTask, removeTask }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext;