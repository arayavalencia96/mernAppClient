import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TasksProvider";
import Container from "react-bootstrap/Container";

function Taskspage() {
  const { tasks, loadTasks } = useTasks();

  /* Se utilzia useEffect para realizar acciones a partir que se va cargando
   la pag. en este caso se piden datos */
  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h3> No tienes tareas aún! </h3>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1 className="d-flex justify-content-center"> Tareas </h1>
      <Container className="d-flex" style={{flexFlow:"wrap",
      justifyItems: "center",
      maxWidth: "inherit",
      placeContent:"space-evenly",
      justifyItems: "center"}}>
        {renderMain()}
      </Container>
    </div>
  );
}

export default Taskspage;
