import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Aboutpage from '../pages/Aboutpage'
import Loginpage from '../pages/Loginpage'
import Signuppage from '../pages/Signuppage'
import Contactpage from '../pages/Contactpage'
import Petadoptionpage from '../pages/Petadoptionpage'
import Petshelterpage from '../pages/Petshelterpage'
import Admindashbaordpage from '../pages/Admindashbaordpage'
import Profilepage from '../pages/Profilepage'
import Adoptionhome from '../pages/Adoptionhome'
import Medicalpage from '../pages/Medicalpage'
import Lostfoundpage from '../pages/Lostfoundpage'
import Communitypage from '../pages/Communitypage'
import Clinicpage from '../pages/Clinicpage'
import Servicespage from '../pages/Servicespage'
import Clinicaboutpage from '../pages/Clinicaboutpage'

function Admin() {
  return (
    <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<Aboutpage/>}/>
    <Route path='/login' element={<Loginpage/>}/>
    <Route path='/signup' element={<Signuppage/>}/>
    <Route path='/contact' element={<Contactpage/>}/>
    <Route path='/pet' element={<Petadoptionpage/>}/>
    <Route path='/petshelter' element={<Petshelterpage/>}/>
    <Route path='/' element={<Admindashbaordpage/>}/>
    <Route path='/profile' element={<Profilepage/>}/>
    <Route path='/adoption' element={<Adoptionhome/>}/>
    <Route path='/medical' element={<Medicalpage/>}/>
    <Route path='/lostfound' element={<Lostfoundpage/>}/>
    <Route path='/community' element={<Communitypage/>}/>
    <Route path='/clinic' element={<Clinicpage/>}/>
    <Route path='services' element={<Servicespage/>}/>
    <Route path='clinicabout' element={<Clinicaboutpage/>}/>
</Routes>
  )
}

export default Admin