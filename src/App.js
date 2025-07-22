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

function App() {
  return (
    <Router>
      <div className='font-poppins flex flex-col lg:flex-row  shadow-md ' >
        <Sidepanel/>
        <div className='flex flex-col w-[100%] h-[100vh] overflow-x-hidden ' >
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
  );
}

export default App;
