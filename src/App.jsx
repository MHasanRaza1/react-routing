import React from 'react'
import { Route, Routes } from 'react-router'
import AllProfiles from './pages/AllProfiles/AllProfiles'
import Profile from './pages/Profile/Profile'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AllProfiles />} />
        <Route path='/all-profile' element={<AllProfiles/>} />
        <Route path='/all-profiles/:id' element={<Profile/>} />
      </Routes>
    </div>
  )
}

export default App