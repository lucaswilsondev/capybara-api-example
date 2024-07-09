import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CapivasDoDia from './pages/CapivasDoDia'
import CapivasDaHora from './pages/CapivasDaHora'
import Gerador from './pages/GeradorDeCapivas'
import Header from './components/Header'
import PageBase from './pages/PageBase'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<PageBase />}>
                    <Route index element={<CapivasDoDia />} ></Route>
                    <Route path="/hora" element={<CapivasDaHora />} ></Route>
                    <Route path="/gerador" element={<Gerador />} ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
