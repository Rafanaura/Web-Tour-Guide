import React from "react"
import { Routes, Route } from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import Paket from './pages/paket'
import Login from './pages/login'
import Registrasi from './pages/register'
import WisataBanyuwangi  from './pages/wisata/wisata-bwi'
class Main extends React.Component{
    render(){
        return(
            <Routes>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/paket' element={<Paket/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/registrasi' element={<Registrasi/>}></Route>
                <Route path='/paket/banyuwangi' element={<WisataBanyuwangi/>}></Route>
            </Routes>
        )
    }
}
export default Main;