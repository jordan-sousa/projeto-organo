import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Banner from './componentes/Banner/Banner';
// import Rodape from "./componentes/Rodape"
import Cadastrar from "./pages/Cadastrar/index"
import Login from "./pages/Login/index"


function AppRoutes() {

  return (
    <BrowserRouter>
      {/* <Banner/> */}
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/cadastrar" element={ <Cadastrar /> } />
      </Routes>

      {/* <Rodape /> */}
    </BrowserRouter>
  )
}

export default AppRoutes;
