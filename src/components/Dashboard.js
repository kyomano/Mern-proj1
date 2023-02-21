import React from 'react';
import "./main.css";
import "./layout.css";
import "./workspace.css";
import PostItem from './Post/postItem';

function Dashboard (){

    const getPostContents = ()=>{
        return [(<PostItem target="Rolex" avatar="2" content="Let it die." timeLog="1:52pm"></PostItem>),
        (<PostItem target="Rolex" avatar="1" content="Let it die." timeLog="1:52pm"></PostItem>),
        (<PostItem target="Moony" avatar="3" content="Let's start." timeLog="11:52pm"></PostItem>),
        (<PostItem target="hunter" avatar="" content="Let's go." timeLog="2:35am"></PostItem>),
        (<PostItem target="Monster" avatar="2" content="Let it go." timeLog="8:12pm"></PostItem>),
        (<PostItem target="Lightning" avatar="4" content="Let's fight." timeLog="6:12am"></PostItem>)];
    }

    const postContent = getPostContents();
    console.log(postContent);

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
                            <p>Today</p> 
                            {postContent!=undefined? postContent:"No Data"}
                        </div>
                    </div>
                    <div className="wPanel w-3-1 h-1-1">
                        <div className='p-workspace-header'>
                            Profile
                        </div>
                        <div className='p-profile-container'>
                            <div style={{margin:"45px"}}> <img src="./avatar.png" style={{width:"100%"}}></img> </div>
                            <h4> Moony</h4>
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
                        <div className='collapseItem'> <img src="./avatar.png" width={20} height={20}></img> Moony </div>
                        <div className='collapseItem'> <img src="./avatar1.png" width={20} height={20}></img> hunter </div>
                        <div className='collapseItem'> <img src="./avatar2.png" width={20} height={20}></img> rolex </div>
                        <div className='collapseItem'> <img src="./avatar3.png" width={20} height={20}></img> Monster </div>
                        <div className='collapseItem'> <img src="./avatar4.png" width={20} height={20}></img> Lightning </div>
                    </div>
                </div>
            </div>
    </div>);
}
export default Dashboard;