import './App.css'
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home'
import MyLinks from './components/links/MyLinks'
import NoticationPage from './components/notifications/NoticationPage'
import ProfilePage from './components/profile/ProfilePage'
import Chatpage from './components/chat/Chatpage';

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/mylinks' element={<MyLinks/>}/>
          <Route path='/notifications' element={<NoticationPage/>}/>
          <Route path='/mychat' element={<Chatpage/>}/>
      </Routes>
    </div>
  )
}

export default App
