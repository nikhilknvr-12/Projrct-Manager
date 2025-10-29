import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/Signup'
import PrivateRoute from './routes/PrivateRoute'
import UserDashboard from './pages/user/UserDashboard'
import TaskDetails from './pages/user/TaskDetails'
import MyTask from './pages/user/MyTasks' 
export const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp/>}/>
        {/* Add other routes here */} 
        <Route element={<PrivateRoute allowedRoles={['admin']}/>}>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/tasks' element={<CreateTask/>}/>
        <Route path='/admin/users' element={<ManageTasks/>}/>
        <Route path='/admin/create-task' element={<ManageUsers/>}/>
        </Route>

        {/* Add other routes here */}

        <Route element={<PrivateRoute allowedRoles={['user']}/>}>
        <Route path='/user/dashboard' element={<UserDashboard/>}/>
        <Route path='/user/tasks' element={<MyTask/>}/>
        <Route path='/user/task-details/id:' element={<TaskDetails/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App  