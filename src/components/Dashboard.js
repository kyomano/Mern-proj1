import React from 'react';
import "./main.css";
import "./layout.css";
import "./workspace.css";
import PostItem from './Post/postItem';

function Dashboard (){

    const getPostContents = ()=>{

    }

    const postContent = getPostContents();

    return (<div>
            <div className="rightPanel">
                <div className="rightContent">
                    <div className='wPanel w-3-2'> 
                        <div className='p-workspace-header'>
                            Direct Messages
                        </div>
                        <div className='p-workspace-section fs-small'>
                            To: &nbsp; @somebody or somebody@example.com
                        </div>
                        <div className='p-workspace-container'>
                            &nbsp;Today
                        </div>
                    </div>
                    <div className="wPanel w-3-1 h-1-1">
                        <div className='p-workspace-header'>
                            Profile
                        </div>
                        <div className='p-profile-container'>
                            Container
                        </div>
                    </div>
                </div>
            </div>
            <div className="leftPanel">
                <div className='leftContent'>
                    <div className='menuItem' style={{fontWeight:"bold", color:"white", padding:"10px 15px", fontSize:"18px"}}>DR-Group - <span className='newMessageBtn'> + </span></div>
                    <div className='menuItem'>
                        <div className='collapseItem'> <icon>-</icon> Direct messages</div>
                        <div className='collapseItem'> <icon>-</icon> Mentions & reactions</div>
                        <div className='collapseItem'> <icon>:</icon> More </div>
                    </div>
                    
                    <div className='menuItem'>
                        <div className='collapseItem'> <icon>-</icon> Channels</div>
                        <div className='collapseItem'> <icon>-</icon> rp-hunt</div>
                        <div className='collapseItem'> <icon>:</icon> general </div>
                        <div className='collapseItem'> <icon>:</icon> random </div>
                        <div className='collapseItem'> <icon>+</icon> dev </div>
                        <div className='collapseItem'> <icon className="activeItem">+</icon> Add channels </div>
                        
                        <div className='collapseItem'> <icon>+</icon> Direct messages </div>
                        <div className='collapseItem'> <icon className="activeItem">+</icon> Add teammate </div>
                    </div>
                </div>
            </div>
    </div>);
}
export default Dashboard;