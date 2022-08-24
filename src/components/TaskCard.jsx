import { useTasks } from "../context/TasksProvider";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();
  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };
  

  return (
    <Card
      id="cardTaskId"
      className="mb-4 p-3 d-flex"
      style={{ width: "min-content",
      textAlign: "center",
      background: "#d7fff4"
    }}
    >
      <h3>{task.title}</h3>
      <p>{task.descrip}</p>
      <span className="mb-2" style={{ width: "max-content" }}>
        {task.createAt}
      </span>
      <Container className="d-flex justify-content-evenly">
        <Button
          className="me-1"
          size="sm"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          <FontAwesomeIcon icon={faPenToSquare} size="xl" />
        </Button>
        <Button
          className="me-1"
          variant="danger"
          size="sm"
          onClick={() => deleteTask(task.id)}
        >
          <FontAwesomeIcon icon={faTrashCan} size="xl" />
        </Button>
        <Button variant="info" size="sm" onClick={() => handleDone(task.done)}>
          <span>{task.done == 1 ? "✔️" : "❌"}</span>{" "}
        </Button>
      </Container>
    </Card>
  );
}

export default TaskCard;
