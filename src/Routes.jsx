import {  Routes,  Route} from "react-router-dom";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function Router() {

return(
    <Routes>
      <Route path="/" element={<Login />}/>        
      <Route path="/register" element={<Register/>}/>      
      <Route path="/admin-painel" element={<Admin/>}/>      
    </Routes>
);
}
