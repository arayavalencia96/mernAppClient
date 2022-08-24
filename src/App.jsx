import { Route, Routes } from "react-router-dom";
import Taskspage from "./pages/Taskspage";
import Tasksform from "./pages/Tasksform";
import NotFound from "./pages/NotFound";
import Navbarr from "./components/Navbar";
import { TasksContextProvider } from "./context/TasksProvider";
import Footerr from "./components/Footer";

function App() {
  return (
    <TasksContextProvider>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Taskspage />} />
        <Route path="/new" element={<Tasksform />} />
        <Route path="/edit/:id" element={<Tasksform />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footerr/>
    </TasksContextProvider>
  );
}

export default App;
