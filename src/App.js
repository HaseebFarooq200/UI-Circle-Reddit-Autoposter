import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'primereact/resources/themes/lara-light-blue/theme.css'; // or any other theme
import 'primereact/resources/primereact.min.css';
import Sidepanel from './components/sidepanel';
import Dashboard from "./pages/dashboard";
import SubredditsPage from "./pages/subreddits_page";
import PostsPage from "./pages/posts_page";
import UsersPage from "./pages/users_page";
import Settings from "./pages/settings";
import SidepanelMobile from "./components/sidepanel_mobile"
import { useState } from "react";
import SignIn from "./pages/signin";

function App() {
  const [showSidebarA, setShowSidebarA] = useState(true);

  const toggleSidebar = () => {
    setShowSidebarA(prev => !prev);
  };
  console.log(showSidebarA)
  return (
    <>
    <Router>
      <div className='font-poppins flex flex-row shadow-md '>
        <div className={`absolute top-0 left-0 h-full w-[80%] md:w-[25%] bg-[#151529] shadow-md z-20 transition-transform duration-300 ease-in-out ${showSidebarA ? 'translate-x-0' : '-translate-x-full'}`}>
          <Sidepanel toggleSidebar={toggleSidebar} />
        </div>
        <div className={`absolute top-0 left-0 h-full w-[10%] lg:w-[5%] bg-[#151529] shadow-md z-10 transition-transform duration-300 ease-in-out ${showSidebarA ? '-translate-x-full' : 'translate-x-0'}`}>
          <SidepanelMobile toggleSidebar={toggleSidebar} />
        </div>
        <div className={`flex flex-col  w-[100%] h-[100vh] overflow-x-hidden ${showSidebarA ? 'ml-[25%]' : 'lg:ml-[5%] ml-[10%]'}`} >
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/manage-subreddits' element={<SubredditsPage />} />
              <Route path='/posts-analytics' element={<PostsPage />} />
              <Route path='/user-activity' element={<UsersPage />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
        </div>
      </div>
    </Router>
    </>

  );
}

export default App;
