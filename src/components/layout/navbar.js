import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <div style={{position:"relative", width:"100%", height:"100%"}}>
                    <img className='wLogo' src='./images/Navbar/monkeyfi.png'></img>

                    <a style={{left:'33%', top:'81px'}}> About us </a>
                    <a style={{left:'41%', top:'81px'}}> Wallet </a>
                    <a style={{left:'50%', top:'81px'}}> Markets </a>
                    <a style={{left:'59%', top:'81px'}}> My Chat </a>
                    <a style={{left:'67%', top:'81px'}}> LitePaper </a>

                    <a style={{left:'80%', top:'88px', color:"#EDEBE2"}}> Sign Up </a>
                    <div className="signInBtn" style={{left:'85%', top:'57px'}}> Sign In </div>
                </div>
            </div>
            <div className = 'mobilenavbar'> 
                <img src="./images/mainboard/mobile/Menu.png"></img>
            </div>
        </div>
    );
}

export default Navbar;