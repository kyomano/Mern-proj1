import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div style={{position:"relative", width:"100%", height:"100%"}}>
                <img className='pLogo' src='./images/Navbar/NavbarLogo.png'></img>
                <img className='wLogo' src='./images/Navbar/monkeyfi.png'></img>

                <a style={{left:'35%', top:'81px'}}> About us </a>
                <a style={{left:'43%', top:'81px'}}> Wallet </a>
                <a style={{left:'51%', top:'81px'}}> Markets </a>
                <a style={{left:'60%', top:'81px'}}> My Chat </a>
                <a style={{left:'70%', top:'81px'}}> LitePaper </a>

                <a style={{left:'80%', top:'88px', color:"#EDEBE2"}}> Sign Up </a>
                <div className="signInBtn" style={{left:'86%', top:'57px'}}> Sign In </div>
            </div>
        </div>
    );
}

export default Navbar;