import './App.css';
// import './Routes/switchPage';
import Login from "./pages/login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import NotFound from './pages/NotFound/NotFound';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Profile from './pages/Profile/Profile';
function App() {
  return (
    
    
           <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/ForgetPassword" element={<ForgetPassword/>}></Route>
                    <Route path="/dashboard" element={<Dashboard />} ></Route> 
                    {/* <Route path="/profile" element={<NotFound />} ></Route>  */}
                    <Route path="/users" element={<NotFound />} ></Route> 
                    <Route path="/control-panel" element={<NotFound />} ></Route> 
                    <Route path="/projects" element={<NotFound/>} ></Route> 
                    <Route path="/tasks" element={<NotFound />} ></Route> 
                    <Route path="/operation" element={<NotFound />} ></Route> 
                    <Route path="/NotFound" element={<NotFound />} ></Route> 
                    <Route path="/Profile" element={<Profile />}></Route>
                </Routes>
            </BrowserRouter>
  );
}

export default App;
