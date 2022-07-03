import { Route, Routes } from 'react-router-dom'
import { Albums, Comments, Photos, Posts, Todos, Users } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<div>Root</div>}></Route>
      <Route path='/albums' element={<Albums />}></Route>
      <Route path='/comments' element={<Comments />}></Route>
      <Route path='/photos' element={<Photos />}></Route>
      <Route path='/posts' element={<Posts />}></Route>
      <Route path='/todos' element={<Todos />}></Route>
      <Route path='/users' element={<Users />}></Route>
    </Routes>
    // <div>test</div>
  );
}

export default App;
