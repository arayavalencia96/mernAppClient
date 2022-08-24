import { Form, Formik } from "formik";
import { useTasks } from "../context/TasksProvider";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

/* useParams es una propiedad de react-router-dom que retorna un  objeto de clave-valor de 
datos dinamicos de la URL actual la cual coincide con el <Route path> hijo. */
import { useParams, useNavigate, Navigate } from "react-router-dom";

function Tasksform() {
  const { createTask, getTask, updateTask } = useTasks();

  /* Para poder llenar los campos al momento de editar, con formik, se puede definir otro useState */
  const [task, setTask] = useState({
    title: "",
    descrip: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          descrip: task.descrip,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <h1 className="d-flex justify-content-center">
        {params.id ? "Editar task" : "Crear task"}
      </h1>

      <Formik
        initialValues={task}
        /* formik no permite reinicializar los valores, es decir que una vez seteado un 
        valor se queda con ese, para que muestre los datos traidos, se debe utilizar la propiedad 
        enableReinitialize = {true} */
        enableReinitialize={true}
        onSubmit={async (values) => {
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }
          navigate("/");
          setTask({
            title: "",
            descrip: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="d-flex"
            style={{
              justifyContent: "center",
              marginInline: "auto",
              flexFlow: "column",
              maxWidth: "50%",
              marginTop: "10vh",
            }}
          >
            <input
              className="mb-3"
              type="text"
              name="title"
              placeholder="Tarea"
              onChange={handleChange}
              value={values.title}
            />
            <textarea
              className="mb-3"
              type="text"
              name="descrip"
              placeholder="Description"
              onChange={handleChange}
              value={values.descrip}
            />
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Guardando" : "Guardar"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Tasksform;
