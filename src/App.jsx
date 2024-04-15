import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Skills/>
    <Portfolio />
    <Contact/>
    <Footer />    
    </>
  )
}

export default App
