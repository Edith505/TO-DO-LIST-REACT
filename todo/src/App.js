import React from 'react'
import NavBar from './components/NavBar'
import ToDoList from './components/ToDoList'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AddTask from './components/AddTask'

const App = () => {
  return (
    <section id="todo">
        <BrowserRouter>
        <Routes>
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/:filter?" element={<ToDoList />} />
        </Routes>
        <NavBar/>
        </BrowserRouter>
    </section>
  )
}

export default App
