import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Services from '../pages/Services'
import Signup from '../pages/Signup'
import TeacherDetails from '../pages/TeachersComp/TeacherDetails'
import Teacher from '../pages/TeachersComp/Teacher'
import {Routes,Route} from 'react-router-dom';

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/teachers' element={<Teacher/>}/>
    <Route path='/teachers/:id' element={<TeacherDetails/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>
  </Routes>
}

export default Routers;