import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastrar from "./pages/Cadastrar/index"
import Login from "./pages/Login/index"
import PageOrgano from "./pages/PageOrgano"


function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/cadastrar" element={ <Cadastrar /> } />
        <Route path='/organo' element={ <PageOrgano /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
