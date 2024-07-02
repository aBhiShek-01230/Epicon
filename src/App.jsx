import React, { useEffect } from 'react'
import   Home  from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import { Routes,Route, useNavigate } from 'react-router-dom'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchPage from './components/SearchPage/SearchPage'
import SeriesPage from './components/SeriesPage/SeriesPage'
import SeriesPlayer from "./pages/seriesPlayer/SeriesPlayer"
import Episode from './components/Episodes/Episode'


const App = () => {

  

  const navigate = useNavigate();

  useEffect (()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        
        navigate('/');
        
      }else{
        
        navigate('/login');
       
      }
    })
  },[])


  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/series/:id' element={<SeriesPage/>}/>
        <Route path='/SeriesPlayer/:id/:season/:episode' element={<SeriesPlayer/>}/>
        <Route path='/episodes' element={<Episode/>}/>
       
      </Routes>
     
     
    </div>
  )
}

export default App
