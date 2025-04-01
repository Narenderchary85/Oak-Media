import './App.css'
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home'
import MyLinks from './components/links/MyLinks'
import NoticationPage from './components/notifications/NoticationPage'
import ProfilePage from './components/profile/ProfilePage'
import Chatpage from './components/chat/Chatpage';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/mylinks' element={<MyLinks/>}/>
          <Route path='/notifications' element={<NoticationPage/>}/>
          <Route path='/mychat' element={<Chatpage/>}/>
          <Route path='/sign' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
