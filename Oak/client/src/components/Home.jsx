import React,{useEffect,useState} from 'react'
import NavBar from './NavBar'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import MiddelSection from './MiddelSection'
import { useDispatch} from 'react-redux'
import { userDetails,getPostOfUser, allUsersDetails, allposts } from '../storeReducx/actionReudcer'


const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const token=localStorage.getItem('token');
  console.log(token);
  const dispatch=useDispatch();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(()=>{
    dispatch(userDetails(token));
    dispatch(getPostOfUser(token));;
    dispatch(allUsersDetails(token));
    dispatch(allposts());
  },[token])

  return (
    <div className="bg-custom-gray w-full min-h-screen flex sm:flex-col lg:flex-row relative pt-16 md:flex-row">
      <NavBar className=''/>

      <div className="flex flex-col lg:flex-row w-full">
        <LeftSection />
        <MiddelSection />
        {!isMobile && <RightSection />}
      </div>
    </div>
  )
}

export default Home
