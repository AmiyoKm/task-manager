import { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const Project: React.FC = () => {
  const { tasks, removeTask, updateTask } = useContext(GlobalContext);
  console.log(tasks)

  return (
    <div className="flex flex-col h-screen w-full p-8">
      <Label className="text-5xl font-extrabold text-center mb-20">Current Tasks</Label>
      
      <div className="flex justify-evenly space-x-10 flex-wrap">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Card key={task.id} className="mb-4">
              <CardHeader>
                <CardTitle>{task.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Priority: {task.priority}</p>
                <p>Status: {task.status}</p>
                <p>Due Date: {task.dueDate instanceof Date ? task.dueDate.toISOString().split('T')[0] : task.dueDate}</p>
              </CardContent>
              <CardFooter>
                <Button onClick={() => updateTask(task.id, {...task, status: "In Progress" })}>Edit</Button>
                <Button variant="destructive" className="ml-2" onClick={() => removeTask(task.id)}>Delete</Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="font-extrabold flex justify-center w-screen text-5xl">
            No Current Tasks, please add some
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;