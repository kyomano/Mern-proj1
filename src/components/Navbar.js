import React from 'react';
import "./main.css"

function Navbar (){
    return (<div className="NavBar">
            <div className="leftNavPanel">
                <div className='leftNavContent'>
                    <span className="avatarIcon"> * </span>
                    <span className="helpIcon"> ? </span>
                </div>
            </div>
            <div className="rightNavPanel">
                <div className="rightNavContent">
                    <span>  </span> &nbsp; <input type="edit" className='searchBar' placeholder='Search DR-Group'></input>
                </div>
            </div>
    </div>);
}
export default Navbar;