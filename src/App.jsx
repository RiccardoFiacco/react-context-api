import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {DefaultPage} from './component/DefaultPage'
import { Home } from './component/Main/home/Home'
import { ChiSiamo } from './component/Main/chisiamo/ChiSiamo'
import { Posts } from './component/Main/crud_page/index/Posts.jsx'
import { notFound } from './component/Main/not found/notFound.jsx'
import { Show } from './component/Main/crud_page/Show.jsx'
import { Create } from './component/Main/crud_page/create.jsx'
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultPage}>
          <Route path='/' Component={Home}></Route>
          <Route path='/chi_siamo' Component={ChiSiamo}></Route>
          <Route path='/posts'>
            <Route index Component={Posts}></Route>
            <Route path='/posts/:id' Component={Show}></Route>
            <Route path='/posts/create' Component={Create}></Route>
          </Route>
          <Route path='*' Component={notFound}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
