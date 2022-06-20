import './App.css';
// import './Routes/switchPage';
import Login from "./pages/login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    
    
           <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/dashboard" element={<Dashboard />} ></Route> 
                </Routes>
            </BrowserRouter>
  );
}

export default App;
