
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Registre from './pages/Registre';
import Regitr from './pages/Regitr';
import Login from './pages/Login';
import Logins from './pages/Logins';
import Posts from './pages/Posts';
import NavBar from './component/NavBar';
import NavBaar from './component/NavBaar';
import Description from './component/Descripion';
import { useSelector } from 'react-redux';
function App() {
  const {postList} = useSelector((state) => state.postReducer);
  console.log(postList)
  return (
    <div >
      <NavBaar/>
      <Routes>
        <Route path ='/home' element ={<Home/>}></Route>
        <Route path='/description/:id' element = {<Description postList={postList} />} />

        <Route path ='/registre' element ={<Regitr/>}></Route>
        <Route path ='/login'  element ={<Logins/>}></Route>
        <Route path ='/posts'  element ={<Posts/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
