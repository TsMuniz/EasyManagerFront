import {  Routes,  Route} from "react-router-dom";
import Admin from "./pages/Admin";
import Team from "./pages/AdminContent/Team";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoutes from "./utils/PrivateRoutes";

export default function Router() {

return(
    <Routes>
      <Route element={<PrivateRoutes/>}>
        <Route path="/admin-painel" element={<Admin/>}>
          <Route path="Equipe" element={<Team/>}/>
          <Route path="Produtos" element={<Team/>}/>
          <Route path="Financeiro" element={<Team/>}/>
          <Route path="Relatorios" element={<Team/>}/>
        </Route>    
      </Route>

      <Route path="/" element={<Login />}/>        
      <Route path="/register" element={<Register/>}/>      
    </Routes>
);
}
