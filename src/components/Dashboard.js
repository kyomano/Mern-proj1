import React from 'react';
import "./main.css"
function Dashboard (){
    return (<div>
            <div className="rightPanel">
                <div className="rightContent">
                    Menu
                </div>
            </div>
            <div className="leftPanel">
                <div className='leftContent'>
                    <div className='menuItem'>DR-Group - </div>
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
                        <div className='collapseItem activeItem'> <icon>+</icon> Add channels </div>
                        
                        <div className='collapseItem'> <icon>+</icon> Direct messages </div>
                        <div className='collapseItem activeItem'> <icon>+</icon> Add teammate </div>
                    </div>
                </div>
            </div>
    </div>);
}
export default Dashboard;