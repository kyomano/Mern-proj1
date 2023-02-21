import "./post.css";

const PostItem = (props) => {
    return (<div className="postItem">
        <div className="postIcon"> <img src={"./avatar"+props.avatar+".png"} width={40} height={40}></img>  </div>
        <div className="postContent">
            <div style={{color:"black"}}> {props.target} </div> 
            <div> {props.content} </div> 
        </div>
        <div className="postLog"> {props.timeLog} </div>
    </div>)
}

export default PostItem;