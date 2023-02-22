import React from 'react';

const Navbar = () => {

    const menuToggler = () => {
        var item = document.getElementsByClassName("mobileMenu")[0];
        if(item.style.display == "block") item.style.display = "none";
        else item.style.display = "block";
    }

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
                <img class="MobileNavbarMenuBtn" src="./images/mainboard/mobile/Menu.png" onClick={menuToggler.bind(this)}></img> <br></br>
                <div className='mobileMenu'>
                    <div className='mobileMenuBtn' onClick={menuToggler.bind(this)}><a href='#'>SignIn</a> / <a href='#'>SignUp</a></div>
                    <div className='mobileMenuBtn' onClick={menuToggler.bind(this)}>LitePaper</div>
                    <div className='mobileMenuBtn' onClick={menuToggler.bind(this)}>My Chat</div>
                    <div className='mobileMenuBtn' onClick={menuToggler.bind(this)}>Marckets</div>
                    <div className='mobileMenuBtn' onClick={menuToggler.bind(this)}>Wallet</div>
                    <div className='mobileMenuBtn' onClick={menuToggler.bind(this)}>About us</div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;