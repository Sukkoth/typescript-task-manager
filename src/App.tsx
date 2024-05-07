import "./App.css";
import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages/HomePage";
import WithBottomNav from "./components/WithBottomNav";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ActionOptionPage from "./pages/ActionOptionPage";
import NewProject from "./pages/NewProject";
import NewTask from "./pages/NewTask";
import CalendarPage from "./pages/CalendarPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import AuthOutlet from "./components/AuthOutlet";
import MenuPage from "./pages/MenuPage";
import Test from "./pages/Test";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<AuthOutlet />}>
            <Route path='/' element={<WithBottomNav />}>
              <Route index element={<HomePage />} />
              <Route path='projects'>
                <Route index element={<ProjectsPage />} />
                <Route path=':projectId' element={<ProjectDetailPage />} />
              </Route>
              <Route path='calendar' element={<CalendarPage />} />
              <Route path='menu' element={<MenuPage />} />
            </Route>
            <Route path='/new'>
              <Route index element={<ActionOptionPage />} />
              <Route path='task' element={<NewTask />} />
              <Route path='project' element={<NewProject />} />
            </Route>
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/get' element={<Test />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
