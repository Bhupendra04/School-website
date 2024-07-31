import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import AboutUs from './component/AboutUs';
import Academics from './component/Academics';
import Admissions from './component/Admissions';
import ContactUs from './component/ContactUs';
import Faculty from './component/Faculty';
import Gallary from './component/Gallary';
import HomePage from './component/HomePage';
import Student from './component/Student';

const App = () => {

  return (
    <>
    <Menu/>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/about' element={<AboutUs />}/>
      <Route path='/academics' element={<Academics />} />
      <Route path='/admissions' element={<Admissions />} />
      <Route path='/faculty' element={<Faculty />} />
      <Route path='/student' element={<Student />} />
      <Route path='/gallary' element={<Gallary />} />
      <Route path='/contact' element={<ContactUs />} />
    </Routes>
      
    
    

      {/* <About/>
      <Contect/> */}
    </>
  )
}

export default App;
