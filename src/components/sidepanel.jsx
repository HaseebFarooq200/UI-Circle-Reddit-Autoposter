import React from 'react';
import '../styles/sidepanel.css';
import { Link } from 'react-router-dom';
import { ChartNetwork, ChartNoAxesGantt, LayoutDashboard, Menu, Settings } from 'lucide-react';

const Sidepanel = ({toggleSidebar}) => {
        return (
        <>
                <div className='flex items-center justify-between'>
                        <div className="text-[#f1f3fe] p-2 m-4" >
                                <h1 className='text-2xl font-bold' >Circle Reddit</h1>
                                <h1 className='text-lg font-semibold'>Autoposter</h1>
                        </div>
                        <div className="text-[#f1f3fe] p-2 m-3 cursor-pointer " onClick={toggleSidebar}>
                                <Menu size={20} />
                        </div>
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
                <Link  to="/settings" className="side-panel-each-item" >
                        <Settings size={20}/>
                        <p>Settings</p>
                </Link>
        </>
)}

export default Sidepanel;
