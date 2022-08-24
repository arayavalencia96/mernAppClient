import { createContext, useContext, useState } from "react";
import {
  getTasksRequest,
  deleteTaskRequest,
  createTaskRequest,
  getTaskRequest,
  updateTaskRequest,
  toggleTaskDoneRequest,
} from "../api/tasks.api";
import { TasksContext } from "./TasksContext";

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TasksContextProvider");
  }
  return context;
};

// Este es el cual agrupa
export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // función para cargar las tareas
  async function loadTasks() {
    const response = await getTasksRequest();
    setTasks(response.data);
  }

  // función para elimianr una tarea
  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // función para crear una tarea
  const createTask = async (task) => {
    try {
      await createTaskRequest(task);
      // setTasks([... tasks, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  // función para obtener una tarea específica
  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // función para actualizar una tarea
  const updateTask = async (id, newFields) => {
    try {
      const response = await updateTaskRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // función para establecer una tarea como realizada/ no realizada
  const toggleTaskDone = async (id) => {
    try {
      const taskFound = tasks.find((task) => task.id === id);
      await toggleTaskDoneRequest(id, taskFound.done === 0 ? true : false);
      setTasks(
        tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        loadTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
        toggleTaskDone,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
