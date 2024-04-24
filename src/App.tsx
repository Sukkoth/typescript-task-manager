import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import WithBottomNav from "./components/WithBottomNav";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ActionOptionPage from "./pages/ActionOptionPage";
import NewProject from "./pages/NewProject";
import NewTask from "./pages/NewTask";
import CalendarPage from "./pages/CalendarPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<WithBottomNav />}>
        <Route index element={<HomePage />} />
        <Route path='projects'>
          <Route index element={<ProjectsPage />} />
          <Route path=':projectId' element={<ProjectDetailPage />} />
        </Route>
        <Route path='calendar' element={<CalendarPage />} />
      </Route>
      <Route path='/new'>
        <Route index element={<ActionOptionPage />} />
        <Route path='task' element={<NewTask />} />
        <Route path='project' element={<NewProject />} />
      </Route>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
