import './App.css'

import Navigation from "./components/Navigation/Navigation"
import Footer from './components/Footer/Footer';
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className='app-container'>
        < Navigation />
        <div className='main-content'>
        <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default App
