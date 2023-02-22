import React from 'react';

const MainBoard = () => {

    var coinsContent = [];
    var coins = ["Bitcoin.png","ACT.png","BNB.png","ETH.png","ITC.png","OGN.png","SVGID.png", "USDT.png", "XRP.png"];
    
    for(var i = 0 ; i < 9; i ++)
    {
        var path = "url('./images/mainboard/Logo/"+ coins[i]+ "')"
        coinsContent.push(
                <div className="coinItem" style={{backgroundImage:"url('./images/mainboard/CardBg.png')", color:"white", width: "325px", height:"155px", display:"flex", padding:"15px", flexDirection:"column"}}> 
                <div style={{display:"flex", flexDirection:"row", width:"100%", height:"60px"}}>
                    <div style={{backgroundImage:path, width:"48px", height:"45px", textAlign:"center"}}> </div> 
                    <div style={{textAlign:"center", display:"flex", height:"45px", width:"calc(100% - 88px)", paddingLeft:"15px", flexDirection:"column"}}> 
                        <div style={{fontSize:"14px", fontWeight:"bold", textAlign:"left"}}> Bitcoin </div> 
                        <div style={{fontSize:"24px", wordSpacing:"2px", fontWeight:"bold", textAlign:"left"}}> USD 53,260.20 </div>
                    </div>  
                    <div style={{width:"40px", color:"#aaa"}}> BTC </div>
                </div>
                <div style={{display:"flex", flexDirection:"row", width:"100%", height:"60px"}}>
                    <div style={{backgroundImage:"url('./images/mainboard/Vector (1).png')", width:"70%", height:"80px", textAlign:"center"}}> </div> 
                    <div style={{width:"30%", height:"30px",float:"right", color:"#aaa",textAlign:"right", paddingTop:"50px"}}> 2.11% </div>
                </div>
            </div>
     );
    }
    return (
        <div className='MainBoard'>
            <div> 
                <img src='./images/mainboard/monkey.png' style={{position: "absolute", left:"500px", top:"40px", width:"851" ,height: "851"}}></img>
                <img src='./images/mainboard/bk/BGPattern.png' style={{position:"absolute",zIndex: "0", height:"6000px", overflow:"hidden"}}></img>
            </div>
            <div className="content-Wallet">
                <div className="createWallet">
                    <div style={{color:"#CAFC01"}}> TRADE, SOCIALIZE AND FARN CRYPTO </div>
                    <div className="c-w-info" style={{top:"41px",marginBottom:"10px"}}> trade the most popular crypto currencies, at ease. </div>
                    <div style={{display:"flex", flexDirection:"row", textAlign:"center", justifyContent:"center"}}>
                        <div style={{top:"340px", width:'8px', height: "85px", backgroundColor:"#CAFC01", display:"block", marginRight:"20px"}}> </div>
                        <div className="w-info">Monkey Finance is a next-generation cryptocurrency exchange that offers users on-boarding education, rewards, and an incredible social aspect to buying/selling cryptos.
                        </div>
                    </div>
                    <div style={{marginTop:"50px", display:"flex"}}>
                        <div style={{width:"50%", height:"100%", padding:"0px 15px"}}> 
                            <div className='alCenter ft-bold' style={{width:"246px", height:"68px", borderRadius:"34px", backgroundColor:"#CAFC01", color:"black"}}> Create Wallet</div> </div> 
                        <div style={{height:"100%", padding:"0px 15px"}}> 
                            <div className="alCenter ft-bold" style={{width:"246px", height:"68px", borderRadius:"34px", backgroundColor:"#CAFC01", color:"black"}}> Socialize</div> </div> 
                    </div>
                </div>

                
                <div className="viewWMS">
                    <div style={{position:"absolute"}}> 
                        <div style={{display:'flex', padding:"10px 20x", height:"75px", width:"230px",marginLeft:"150px", marginTop:"-20px", backgroundColor:"#CAFC01", borderRadius:"21px", boxShadow:"0px 4px 14px rgba(202, 252, 1, 0.74)", justifyContent:"center", alignItems:"center"}}> 
                            <div style={{backgroundImage:"url('./images/mainboard/Vector.png')", width:"45px", height:"53px", paddingRight:"5px", textAlign:"center"}}> </div> 
                            <div className='flex-column' style={{justifyContent:"center", display:"flex", alignItems:"center", width:"calc(100% - 45px)", marginLeft:"5px", height:"100%"}}> 
                                <div style={{top: "10px", fontSize:"20px", fontWeight:"bold"}}> 100% Secure </div> 
                                <div style={{top:"50%"}}> Your funs are safe </div>
                            </div>  
                        </div>  
                    </div>
                    <div className="secureBoard"> 
                        <h3 style={{fontSize:"27px"}}>Markets</h3>
                        <div className="marcketItem bd-bottom">
                            <div style={{width:"60%", color:"#606166"}}> <span style={{width:"60%", float:"left"}}>MF/USD</span> <span style={{width:"40%", float:"right"}}>1.92%</span>   </div>
                            <div style={{width:"100%", fontSize:"23px"}}> <span style={{width:"36%", float:"left"}}>0.0342</span> <span style={{width:"24%",marginTop:"10px"}} >USD</span> <img style={{width:"40%", float:"right"}} src="./images/mainboard/graph.png"></img>   </div>
                        </div>
                        <div className="marcketItem bd-bottom">
                            <div style={{width:"60%", color:"#606166"}}> <span style={{width:"60%", float:"left"}}>MF/USD</span> <span style={{width:"40%", float:"right"}}>1.92%</span>   </div>
                            <div style={{width:"100%", fontSize:"23px"}}> <span style={{width:"36%", float:"left"}}>0.0342</span> <span style={{width:"24%",marginTop:"10px"}} >USD</span> <img style={{width:"40%", float:"right"}} src="./images/mainboard/graph.png"></img>   </div>
                        </div>
                        <div className="marcketItem bd-bottom">
                            <div style={{width:"60%", color:"#606166"}}> <span style={{width:"60%", float:"left"}}>MF/USD</span> <span style={{width:"40%", float:"right"}}>1.92%</span>   </div>
                            <div style={{width:"100%", fontSize:"23px"}}> <span style={{width:"36%", float:"left"}}>0.0342</span> <span style={{width:"24%",marginTop:"10px"}} >USD</span> <img style={{width:"40%", float:"right"}} src="./images/mainboard/graph.png"></img>   </div>
                        </div>
                        <div className="marcketItem bd-bottom">
                            <div style={{width:"60%", color:"#606166"}}> <span style={{width:"60%", float:"left"}}>MF/USD</span> <span style={{width:"40%", float:"right"}}>1.92%</span>   </div>
                            <div style={{width:"100%", fontSize:"23px"}}> <span style={{width:"36%", float:"left"}}>0.0342</span> <span style={{width:"24%",marginTop:"10px"}} >USD</span> <img style={{width:"40%", float:"right"}} src="./images/mainboard/graph.png"></img>   </div>
                        </div>
                    </div>
                    
                    <div style={{position:"absolute", marginTop:"-130px"}}>
                        <div className='myWallet flex-column'>
                        <h3 style={{fontSize:"30px"}}>Wallets</h3>
                        <div> BTC:   <span style={{color:"#CAFC01"}}>USD</span></div>
                        <div> You Got:   <span style={{color:"#CAFC01"}}>329.009 ETH</span></div>
                        <div style={{display:'flex',color:"black", fontWeight:"bold", padding:"10px 20x", height:"75px", width:"230px", marginTop:"35px", backgroundColor:"#CAFC01", borderRadius:"41px", justifyContent:"center", alignItems:"center"}}> 
                            Claim Wards
                        </div>  
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* coinRates  */}
            
    
            <div className='coinBoard' style={{display:"flex", flexWrap:"wrap", height: "auto", justifyContent:"center", flexDrection:"column",marginTop:"100px"}}>
                <div className="wTemplate" style={{transform:"translate('-50%, 0')",flexWrap:"wrap", flexDirection:"row", display:"flex", justifyContent:"center"}}>{coinsContent}</div>
            </div>
            
            {/* The first server social exchange */}
            <div className='panel-header flexAlign-center flex-column'>
                <div className="wTemplate" style={{fontSize:"53px", margin:"5px 400px", lineHeight:"80px", textAlign:"center", color:"white"}}>
                     The first-server social exchange, because centralized exchanges don't have to be  boring! 
                 </div>
                 <div className="wTemplate" style={{fontSize:"23px", top:"220px", margin:"5px 700px", lineHeight:"40px", textAlign:"center", color:"white"}}>
                    Monkey Finance has a variety of features that make it the best place to start trading
                 </div>
            </div>
            <div className='flex-wrap' style={{display:"flex", width:"100%", justifyContent:"center", textAlign:"center"}}>
                 <div className="panelContainer" style={{marginRight:"40px"}}>  
                    <div className="panelHeader">
                    <img src="./images/mainboard/logo/Icon (2).png" style={{width:"50px", height:"50px"}}></img> </div>
                    <h4 className="panelTitle"> Portfolio Manager </h4>
                    <h7 style={{padding:"20px 40px", textAlign:"center"}}> Buy and sell popular digital currencies, keep track of them in the one place. </h7>
                 </div>
                 <div className="panelContainer" style={{marginRight:"40px",marginTop:"80px"}}> 
                    <div  className="panelHeader">
                    <img src="./images/mainboard/logo/Icon (1).png" style={{width:"50px", height:"50px"}}></img> </div>
                    <h4 style={{top:"130px", fontSize:"25px"}}> Social </h4>
                    <h7 style={{top:"190px", padding:"20px 40px", textAlign:"center"}}> Enjoy trading cryptocurrencies while socializing with others in our chatrooms! </h7>
                 </div>
                 <div className="panelContainer"> 
                    <div  className="panelHeader">
                    <img src="./images/mainboard/logo/Icon.png" style={{width:"50px", height:"50px"}}></img> </div>
                    <h4 style={{top:"130px", fontSize:"25px"}}> Asset Protection </h4>
                    <h7 style={{top:"190px", padding:"20px 40px", textAlign:"center"}}> For added security, store your funds in a vault with time delayed withdrawals and earn $MF . </h7>
                 </div>
            </div>

            {/* Build your crypto portfolio */}
            
            <div className='panel-header flexAlign-center flex-column'>
                <div className="wTemplate"  style={{fontSize:"53px", margin:"5px 600px", lineHeight:"80px", textAlign:"center", color:"white"}}>
                One click, instant payout with credit or debit card.
                 </div>
                 <div className="wTemplate"  style={{fontSize:"18px", fontWeight:"400", margin:"5px 700px", lineHeight:"40px", textAlign:"center", color:"white"}}>
                 Become a crypto owner in minutes using your debit or credit card and quickly purchase top cryptocurrencies.
                 </div>
            </div>
            <div style={{display:"flex", margin:"0 0", width:"100%", justifyContent:"center"}}>
                <div style={{backgroundImage:"url('./images/mainboard/buy/illustration.png')",width:"400px", transform:"translate(-130px,0)"}}><img src="./images/mainboard/buy/card.png" style={{paddingLeft:"130px"}}></img></div>
            </div>
            <div className='panel-header flexAlign-center flex-column'>
                <div className="wTemplate"  style={{fontSize:"18px", fontWeight:"400", margin:"5px 700px", lineHeight:"40px", textAlign:"center", color:"white"}}>
                    We accept payment with many methods:
                </div>
                <div className="wTemplate"  style={{fontSize:"18px", fontWeight:"400", margin:"5px 700px", lineHeight:"40px", textAlign:"center", color:"white"}}>
                <img src="./images/mainboard/siteLinkers.png"></img>
                </div>
            </div>

            {/* Crypto education, awareness and */}
            <div className='panel-header flexAlign-center flex-column'>
                <div className="wTemplate"  style={{fontSize:"53px", margin:"5px 400px", lineHeight:"80px", textAlign:"center", color:"white"}}>
                 Crypto education, awareness and inclusivity to Latin America and the rest of the world 
                 </div>
                 <div className="wTemplate"  style={{fontSize:"23px", top:"220px", margin:"5px 700px", lineHeight:"40px", textAlign:"center", color:"white"}}>
                 Become a crypto owner in minutes using your debit or credit card and quickly purchase top cryptocurrencies.
                 </div>
            </div>
            <div className='flex-wrap' style={{display:"flex", width:"100%", justifyContent:"center", textAlign:"center"}}>
                <div className='cryptoItem' style={{color:"white",  left:"20%", display:"flex" ,flexDirection:"column", alignItems:"center"}}> 
                    <div className='cryptoIcon' style={{display:"flex",width:"250px", alignItems:"center", justifyContent:"center",borderRadius:"5px", boxShadow:"0px 0px 10px rgb(50,200,50)", backgroundColor:"rgba(255,255,255,0.1)", width:"90px", height:"90px"}}>
                    <img src="./images/mainboard/logo.png" style={{width:"50px", height:"50px"}}></img> </div>
                    <h4 className="cryptoHeader" style={{fontSize:"25px", width:"250px"}}> Clarity </h4>
                    <h7 className="cryptoInform" style={{ padding:"20px 40px", textAlign:"center"}}> We help you make sense of the coins, the terms, the dense charts and market changes. </h7>
                 </div>
                 <div className='cryptoItem' style={{ display:"flex", color:"white",flexDirection:"column", alignItems:"center"}}> 
                    <div className='cryptoIcon' style={{display:"flex",width:"250px", alignItems:"center", justifyContent:"center",borderRadius:"5px", boxShadow:"0px 0px 10px rgb(50,200,50)", backgroundColor:"rgba(255,255,255,0.1)", width:"90px", height:"90px", textAlign:"center"}}>
                    <img src="./images/mainboard/logo (1).png" style={{width:"50px", height:"50px"}}></img> </div>
                    <h4 className="cryptoHeader" style={{fontSize:"25px", width:"250px"}}> Confidence </h4>
                    <h7 className="cryptoInform" style={{padding:"20px 40px", textAlign:"center"}}> Our markets are always up to date, sparking curiosity with real-world relevance. </h7>
                 </div>
                 <div className='cryptoItem' style={{ display:"flex",  color:"white",flexDirection:"column", alignItems:"center"}}> 
                    <div className='cryptoIcon' style={{display:"flex",width:"250px", alignItems:"center", justifyContent:"center",borderRadius:"5px", boxShadow:"0px 0px 10px rgb(50,200,50)", backgroundColor:"rgba(255,255,255,0.1)", width:"90px", height:"90px", textAlign:"center"}}>
                    <img src="./images/mainboard/logo (2).png" style={{width:"50px", height:"50px"}}></img> </div>
                    <h4 className="cryptoHeader" style={{fontSize:"25px", width:"250px"}}> Community </h4>
                    <h7 className="cryptoInform" style={{padding:"20px 40px", textAlign:"center", fontSize:"20px"}}> We support the crypto community, putting data in the hands which need it most. </h7>
                 </div>
            </div>

            <div className='panel-header flexAlign-center flex-column' style={{height:"170px"}}>
                <div style={{fontSize:"53px", margin:"5px 600px", lineHeight:"80px", textAlign:"center", color:"white", width:"800px"}}>
                    What the media will say about MonkeyFi?
                </div>
            </div>
            <div className='flex-row' style={{display:"flex", margin:"0 0", width:"100%", height: "250px", justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                <img src="./images/mainboard/yahoo.png"></img>
                <div style={{color:"white",  width: "585px", backgroundColor:"rgba(50,50,50,0.4)", borderRadius:"10px", height:"229px", display:"flex", flexDirection:"column", justifyContent:"center"}}> 
                    <h4 style={{fontSize:"45px"}}> Forbes </h4>
                    <h7 style={{padding:"2px 40px", textAlign:"center", fontSize:"22px"}}> “Monkey Finance makes a splash in Latin America as the fastest growing cryptocurrency exchange ” </h7>
                </div>
                <img src="./images/mainboard/Newsweek.png"></img>
            </div>

            {/* Build your crypto portfolio */}

            <div className='panel-header flexAlign-center flex-column'>
                <div className="wTemplate"  style={{fontSize:"53px", margin:"5px 600px", lineHeight:"80px", textAlign:"center", color:"white"}}>
                Build your crypto portfolio anywhere.
                 </div>
                 <div className="wTemplate"  style={{fontSize:"23px", top:"220px", margin:"5px 700px", lineHeight:"40px", textAlign:"center", color:"white"}}>
                 A powerful cryptocurrency exchange in your pocket. Buy, sell and trade crypto on the go.
                 </div>
            </div>
            <div style={{display:"flex", margin:"0 0",width:"100%", height: "500px", justifyContent:"center"}}>
                <img src="./images/mainboard/Illustration.png"></img>
            </div>
            <div style={{display:"flex", margin:"0 0", width:"100%", justifyContent:"center",alignItems:'center', color:"white"}}>
                The &nbsp; <img src="./images/mainboard/monkeyfy.png" width="140px" height="40px"></img> &nbsp; Wallet Mobile App is Coming!
            </div>
            <div className='panel-header flexAlign-center flexAlign-center panel-Change' style={{height:"150px"}}>
                <div className='btn-outlined btn-rounded flexAlign-center googlebtn'> 
                    <img src="./images/mainboard/googleplay.png"></img> 
                    <div className="contentCol"> <div>Soon on</div> <div className='ft-bold'>Google Play</div></div>
                </div> &nbsp;&nbsp;&nbsp;
                <div className='btn-outlined btn-rounded flexAlign-center storebtn'> 
                    <img src="./images/mainboard/store.png"></img> 
                    <div className="contentCol"> <div>Available Soon</div> <div className='ft-bold'>App Store</div></div>
                </div>
            </div>

            <div className="panel-header flexAlign-center flex-column flexAlign-center" >
                <div className='wTemplate fc-white pt-3 flexAlign-center flex-column w-2-1' style={{backgroundColor:"rgba(255,255,255,0.1)"}}>
                    <h4 className="font-crypto" style={{marginBottom:"0px"}}> Ready to start trading cryptocurrency?</h4>
                    <h1 style={{fontSize:"44px", lineHeight:"60px"}}> Be part of out beta testing group and earn up to $100!</h1>
                    <div className="flex-row btn-rounded btn-outlined btn-large align-center mb-5"><div style={{width:"calc(100% - 180px)"}}>Enter you email address</div> <div className="btnc-green btn-outlined btn-rounded flexAlign-center">Get Started</div></div>
                </div>
            </div>

            <div className="panel-header flexAlign-center flex-column flexAlign-center p-5 flex-column" >
                <div className='wTemplate fc-white flexAlign-center flex-row w-2-1 plr-5' style={{marginBottom:"30px"}}>
                    <div className="w-3-1 flex-row flex-wrap"> <img className='wLogo' src='./images/Navbar/monkeyfi.png' style={{width:"80%", height:"40%", marginBottom:"5%"}}></img> 
                        <div className='flex-row align-center' style={{width:'100%'}}> <span style={{display:"block", width:"15%"}}> in </span> <span style={{display:"block",width:"15%"}}> f </span> <span style={{display:"block",width:"25%"}}> () </span> </div>
                     </div>
                    <div className="w-3-1 flex-row flex-wrap align-left"> 
                        <h4 style={{width:"100%"}}> Quick Links </h4> 
                        <a style={{width:"50%", color:"#B9D34E", lineHeight:"40px"}}> Buy/Sell </a>
                        <a style={{width:"50%", color:"#B9D34E", lineHeight:"40px"}}> My Chat </a>
                        <a style={{width:"50%", color:"#B9D34E", lineHeight:"40px"}}> Trade Now </a>
                        <a style={{width:"50%", color:"#B9D34E", lineHeight:"40px"}}> LitePaper </a>
                        <a style={{width:"50%", color:"#B9D34E", lineHeight:"40px"}}> Wallet </a>
                    </div>
                    <div className="w-3-1 flex-column flex-wrap align-left"> 
                        <h4 style={{fontSize:"18px"}}> Submit for updates </h4> 
                        <div style={{fontSize:"15px", color:"#B9D34E"}}> Subscribe to get the latest updates from our exchange!</div>
                        <div style={{fontSize:"13px", width:"100%"}} className="flex-row btn-rounded btn-outlined btn-small align-center  mb-5"><div style={{width:"calc(100% - 30px)", fontSize:"13px"}}>Enter you email address</div> <div className="btnc-green btn-outlined btn-small btn-rounded flexAlign-center">Send</div></div>
                
                    </div> 
                    <hr></hr>
                </div>
                <div className='fc-white flexAlign-center flex-row w-2-1' style={{borderTop:"1px solid gray", height:"400px"}}>
                    <div style={{width:"50%",textAlign:"left", fontWeight:"400"}}>MonkeyFi&nbsp;&nbsp;.All rights reserved.</div>
                    <div style={{width:"50%",textAlign:"right", fontWeight:"400"}}>Team of Service&nbsp;&nbsp; Privacy Policy</div>
                </div>
            </div>
            
            
        </div>
    );
}

export default MainBoard;