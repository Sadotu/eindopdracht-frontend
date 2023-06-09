import {Navigate, Route, Routes, useParams} from "react-router-dom";
import './App.css';

//pages
import Calendar from "./pages/Calendar/Calendar";
import Database from "./pages/Database/Database";
import Event from "./pages/Event/Event";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Login from "./pages/Login/Login";
import NewEvent from "./pages/NewEvent/NewEvent";
import NewTask from "./pages/NewTask/NewTask";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/SignUp/SignUp";
import Task from "./pages/Task/Task";
import Tasks from "./pages/Tasks/Tasks";
import Volunteer from "./pages/Volunteer/Volunteer";
import Volunteers from "./pages/Volunteers/Volunteers";

function App() {
    const isAuth = true;

    function eventPage() {
        const { event_id } = useParams
    }

    function taskPage() {
        const { task_id } = useParams
    }

    function volunteerPage() {
        const { volunteer_id } = useParams
    }

  return (
    <>
        <main>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/forgot_password" element={<ForgotPassword/>}/>

                {/* Authorized pages */}
                <Route path="/profile" element={isAuth ? <Profile/> : <Navigate to="login"/>}/>
                <Route path="/database" element={isAuth ? <Database/> : <Navigate to="login"/>}/>
                <Route path="/calendar" element={isAuth ? <Calendar/> : <Navigate to="login"/>}/>
                <Route path="/new_event" element={isAuth ? <NewEvent/> : <Navigate to="login"/>}/>
                <Route path="/event/:event_id" element={isAuth ? <Event/> : <Navigate to="login"/>}/>
                <Route path="/tasks" element={isAuth ? <Tasks/> : <Navigate to="login"/>}/>
                <Route path="/new_task" element={isAuth ? <NewTask/> : <Navigate to="login"/>}/>
                <Route path="/task/:task_id" element={isAuth ? <Task/> : <Navigate to="login"/>}/>
                <Route path="/volunteers" element={isAuth ? <Volunteers/> : <Navigate to="login"/>}/>
                <Route path="/volunteer/:user_id" element={isAuth ? <Volunteer/> : <Navigate to="login"/>}/>
            </Routes>
        </main>
    </>
  );
}

export default App;
