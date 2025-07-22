import React from 'react';
import '../styles/sidepanel.css';
import { Link } from 'react-router-dom';
import { ChartNetwork, ChartNoAxesGantt, LayoutDashboard, Settings, SquareActivity } from 'lucide-react';

const Sidepanel = () => {
        return (
        <div className='text-sm shadow-md w-full lg:w-[25%] bg-[#151529] h-[100vh] ' >
                <div className="text-[#f1f3fe] p-2 m-4" >
                        <h1 className='text-2xl font-bold' >Circle Reddit</h1>
                        <h1 className='text-lg font-semibold'>Autoposter</h1>
                </div>
                <Link to='/' className="side-panel-each-item" >
                        <LayoutDashboard size={20} />
                        <p>Dashboard</p>
                </Link>
                <Link to="/manage-subreddits" className="side-panel-each-item" >
                        <ChartNoAxesGantt size={20}/>
                        <p>Subreddits Management</p>
                </Link>
                <Link to='/posts-analytics' className="side-panel-each-item" >
                        <ChartNetwork size={20}/>
                        <p>Posts Analytics</p>
                </Link>
                {/* <Link to="/user-activity" className="side-panel-each-item" >
                        <SquareActivity size={20}/>
                        <p>User Activity</p>
                </Link> */}
                <Link  to="/settings" className="side-panel-each-item" >
                        <Settings size={20}/>
                        <p>Settings</p>
                </Link>
        </div>
)}

export default Sidepanel;
