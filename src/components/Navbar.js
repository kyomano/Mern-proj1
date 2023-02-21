import React from 'react';
import "./main.css"

function Navbar (){
    return (<div className="NavBar">
            <div className="leftNavPanel">
                <div className='leftNavContent'>
                    <span className="avatarIcon"> <img src="./avatar4.png" width={25} height={25}></img> </span>
                    <span className="helpIcon"> ? </span>
                </div>
            </div>
            <div className="rightNavPanel">
                <div className="rightNavContent">
                    <span>  </span> &nbsp; <input type="edit" className='searchBar' value='Search DR-Group' placeholder='Search DR-Group'></input>
                </div>
            </div>
    </div>);
}
export default Navbar;