import React from 'react';
import "./main.css";
import "./layout.css";
import "./workspace.css";
import PostItem from './Post/postItem';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Dashboard (){
    const [open, setOpen] = React.useState(false);
    const newPost = () =>{
        setOpen(true);
    };
    const handleClick = () => {
        setOpen(true);
      };
    const handleClose = () => {
        return setOpen(false);
    };
    const action = (
    <React.Fragment>
        <Button color="secondary" size="small" >
        UNDO
        </Button>
    </React.Fragment>
    );
    const getPostContents = ()=>{
        return [(<PostItem userId="Monster" target="Rolex" avatar="2" content="Let it die." timeLog="1:52pm"></PostItem>),
        (<PostItem userId="Rolex" target="Rolex" avatar="1" content="Let it die." timeLog="1:52 pm"></PostItem>),
        (<PostItem userId="You" target="Moony" avatar="3" content="Let's start." timeLog="11:52 pm"></PostItem>),
        (<PostItem userId="Lightning" target="hunter" avatar="" content="Let's go." timeLog="2:35 AM"></PostItem>),
        (<PostItem userId="hunter" target="Monster" avatar="2" content="Let it go." timeLog="8:12 pm"></PostItem>),
        (<PostItem userId="Monster" target="Lightning" avatar="4" content="Let's fight." timeLog="6:12 AM"></PostItem>)];
    }
    const menuToggle = () =>{
        var menu = document.getElementsByClassName("leftPanel")[0];
        console.log(menu);
        if(menu == undefined || menu == null) return;
        if(menu.classList.contains("activeMenu")) menu.classList.remove("activeMenu");
        else menu.classList.add("activeMenu");
    }
    const postContent = getPostContents();

    return (<div>
            <div className="rightPanel">
                <div className="rightContent">
                    <div className='wPanel w-3-2'> 
                        <div className='p-workspace-header'>
                            <span className="menuToggle" onClick={menuToggle.bind(this)}> </span> <span>Direct Messages</span>
                        </div>
                        <div className='p-workspace-section fs-small'>
                            To: &nbsp; @somebody or somebody@example.com
                        </div>
                        <div className='p-workspace-container'>
                            <p>Today</p> 
                            {postContent!=undefined? postContent:"No Data"}
                        </div>
                    </div>
                    <div className="wPanel w-3-1 h-1-1 left-grid">
                        <div className='p-workspace-header'>
                            Profile
                        </div>
                        <div className='p-profile-container'>
                            <div style={{margin:"25px 35px"}}> <img src="./avatar3.png" style={{width:"calc(100% - 15px)", borderRadius:"10px"}}></img> </div>
                            <h5 style={{marginBottom:"5px"}}> Moony</h5>
                            <div style={{fontSize:"15px", paddingLeft:"25px"}}> Active, notifications smoozed.  </div>
                            <div style={{fontSize:"15px", paddingLeft:"25px"}}> 11:52 PM local time </div> 
                            <div className="direct-row">
                                <div className='btn-primary' >  Message  </div> 
                                <div className='btn-primary'>  Huddle </div>
                                <div className='btn-small'>  &#0020; </div>
                            </div>
                            <div className="direct-row">
                                <Button className='btn-primary' variant="contained" color='secondary' size="medium"> Message </Button>
                                <Button className='btn-primary' variant="contained" color='secondary' size="medium"> Huddle </Button>
                                <LoadingButton className='btn-small' loading loadingPosition="center"  variant="outlined"> : </LoadingButton>

                            </div>
                        </div>
                        <div className='p-profile-container top-grid'>
                            <div style={{marginBottom:"5px", fontSize:"18px", fontWeight:"500"}}> Contact information</div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="leftPanel">
                <div className='leftContent'>
                    <div className='menuItem' style={{fontWeight:"bold", color:"white", padding:"10px 15px", fontSize:"18px"}}>DR-Group - <span className='closeMenuBtn'  onClick={menuToggle.bind(this)}> X </span></div>
                    <div className='menuItem'>
                        <div className='collapseItem' onClick={newPost.bind(this)}> <icon>-</icon> Direct messages</div>
                        <div className='collapseItem' onClick={newPost.bind(this)}> <icon>-</icon> Mentions & reactions</div>
                        <div className='collapseItem' onClick={newPost.bind(this)}> <icon>:</icon> More </div>
                    </div>
                    
                    <div className='menuItem'>
                        <div className='collapseItem' onClick={newPost.bind(this)}> <icon>-</icon> Channels</div>
                        <div className='collapseItem' onClick={newPost.bind(this)}> <icon>-</icon> rp-hunt</div>
                        <div className='collapseItem' onClick={newPost.bind(this)}> <icon>#</icon> general </div>
                        <div className='collapseItem' onClick={newPost.bind(this)}> <icon># </icon> random </div>
                        <div className='collapseItem' onClick={newPost.bind(this)}> <icon>+</icon> dev </div>
                        <div className='collapseItem' onClick={newPost.bind(this)}> <icon className="activeItem">+</icon> Add channels </div>
                        
                        <div className='collapseItem' onClick={newPost.bind(this)}> <icon>+</icon> Direct messages </div>
                        <div className='collapseItem' onClick={newPost.bind(this)}> <icon className="activeItem">+</icon> Add teammate </div>
                        <div className='collapseItem' onClick={newPost.bind(this)}> <img src="./avatar.png" width={20} height={20}></img> Moony </div>
                        <div className='collapseItem' onClick={newPost.bind(this)}> <img src="./avatar1.png" width={20} height={20}></img> hunter </div>
                        <div className='collapseItem' onClick={newPost.bind(this)}> <img src="./avatar2.png" width={20} height={20}></img> rolex </div>
                        <div className='collapseItem' onClick={newPost.bind(this)}> <img src="./avatar3.png" width={20} height={20}></img> Monster </div>
                        <div className='collapseItem' onClick={newPost.bind(this)}> <img src="./avatar4.png" width={20} height={20}></img> Lightning </div>
                    </div>
                </div>
            </div>


            <Snackbar
                open={open}
                autoHideDuration={2000}
                message="Note archived"
                action={action}
            >
            <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                This is a new post!
            </Alert>
            </Snackbar>

            <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
            <DialogContentText>
                To subscribe to this website, please enter your email address here. We
                will send updates occasionally.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </Dialog>
    </div>);
}

export default Dashboard;

