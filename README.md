# TASKS
Task application, made with React, NodeJS, Express & Mysql.

El proyecto se divide en parte client(frontend), parte server(backend).

El la realización del mismo se utilizó las siguientes tecnologías: React + vite, nodeJS, Express & Mysql. Cabe mencionar que la página esta diseñada 
para que se visualice correctamente tanto en PC cómo en celulares.

**CLIENT:** Dentro de la carpeta src o source nos encontramos las siguientes carpetas:

api: Aquí se realizo la API del CRUD para las diferentes tareas, con la cual se puede probar con POSTMAN, INSOMNIA o Thunder Client (extensión de vscode).

components: En esta sección coloque los componentes comunes que tiene el proyecto los cuales son: el footer, el header o Navbar y también coloqué la tarjeta 
que muestra cada tarea.

context: Para este proyecto utilice Context el cual es una forma de pasar datos a través del arbol de componentes sin tener que usar props manualmente en cada 
nivel. En TaskContext.jsx se realiza la creación del mismo, y en TasksProvider.jsx se procede a realizar el CRUD de las tasks del frontend.

pages: En esta sección se colocó las diferentes páginas más utilizadas las cuales son: el formulario para crear o modificar una tarea, la página principal la 
cual muestra todas las tareas y en donde también se pueden eliminar y marcar como hechas/ no hechas. Cómo también un componente en donde se nos redirige al 
mismo si queremos ir a una URL no válida.
