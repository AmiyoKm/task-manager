import React, { useContext } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GlobalContext } from "@/context/GlobalContext";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";


import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";


const formSchema = z.object({
  title: z.string().min(1, {
    message: "Add a task",
  }),
  dueDate: z.date({
    required_error: "Select a date",
    invalid_type_error: "Invalid date",
  }),
});
const MyTask = () => {
  const {tasks , setTasks}:any =useContext(GlobalContext)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      dueDate: new Date(),
    },
  });
  
  function onSubmit(values: z.infer<typeof formSchema>) {
      if(!values){
        return
      }
      const task = {
        id: tasks.length + 1,
        title: values.title,
        dueDate: values.dueDate,
        priority: "Medium",
        status: "Pending"
      }
      setTasks([...tasks, task])
    
    console.log(tasks);
  }
  return (
    <div className="flex h-screen w-full items-center justify-center ">

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Task</FormLabel>
                <FormControl>
                  <Input placeholder="Enter.." {...field} />
                </FormControl>
                <FormDescription>Add your Tasks here.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <DropdownMenu>
          <DropdownMenuTrigger>
          Select a Due Date
          </DropdownMenuTrigger>
          <DropdownMenuContent>
          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select a Due Date</FormLabel>
                <FormControl>
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                  </FormControl>
                  <FormDescription>Please select a due date</FormDescription>
                  <FormMessage />
                
              </FormItem>
            )}
          />
          </DropdownMenuContent>
          </DropdownMenu>
          

          <Button type="submit">Submit</Button>
        </form>
      </Form>

   
    </div>
  );
};

export default MyTask;
