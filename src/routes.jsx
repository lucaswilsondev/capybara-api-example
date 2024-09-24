import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CapivasDoDia from './pages/CapivasDoDia'
import CapivasDaHora from './pages/CapivasDaHora'
import Gerador from './pages/GeradorDeCapivas'
import Header from './components/Header'
import PageBase from './pages/PageBase'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<PageBase />}>
                    <Route index element={<Login />} ></Route>
                    <Route path="/hora" element={<CapivasDaHora />} ></Route>
                    <Route path="/gerador" element={<Gerador />} ></Route>
                    <Route path="/cadastro" element={<Cadastro />} ></Route>
                    <Route path="/dia" element={<CapivasDoDia />} ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
