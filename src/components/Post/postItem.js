import "./post.css";

const PostItem = (props) => {
    return (<div className="postItem">
        <div className="postIcon"> <img src={"./avatar"+props.avatar+".png"} width={40} height={40}></img>  </div>
        <div className="postContent">
            <div style={{color:"black", fontWeight:"500"}}> {props.userId} </div> 
            <div> {props.target} :  {props.content} </div> 
        </div>
        <div className="postLog"> {props.timeLog} </div>
    </div>)
}

export default PostItem;