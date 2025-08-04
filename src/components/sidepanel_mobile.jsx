import React from 'react';
import '../styles/sidepanel.css';
import { Link } from 'react-router-dom';
import { ChartNetwork, ChartNoAxesGantt, LayoutDashboard, Settings, Menu } from 'lucide-react';

const SidepanelMobile = ({toggleSidebar}) => {
    return (
        <div className='flex flex-col items-center '>
            <div className="text-[#f1f3fe] p-2 m-3 cursor-pointer" onClick={toggleSidebar}>
                <Menu size={20} />
            </div>
            <Link to='/' className="side-panel-each-item " >
                <LayoutDashboard size={20} />
            </Link>
            <Link to="/manage-subreddits" className="side-panel-each-item" >
                <ChartNoAxesGantt size={20}/>
            </Link>
            <Link to='/posts-analytics' className="side-panel-each-item" >
                <ChartNetwork size={20}/>
            </Link>
            <Link  to="/settings" className="side-panel-each-item" >
                <Settings size={20}/>
            </Link>
        </div>
    );
}

export default SidepanelMobile;
