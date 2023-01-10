import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { addComment, deleteComments, deletePost, LikPost } from '../slices/PostSlice';
import PostModel from '../component/PostModel'
import { useState } from 'react';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PostCard = ({title,desc,img,owner,_id,likes,comments , el}) =>{
  const [expanded, setExpanded] = React.useState(false);
  const {userInfo} = useSelector(state=>state.userReducer)
  console.log(userInfo._id)
  const dispatch = useDispatch()
  const user = useSelector((state) => state.userReducer);
  const post = useSelector((state) => state.postReducer);
  const[commentInfo,setCommentInfo] = useState('');
  console.log(el[0])

  return (
    <Card style={{width:"400px" ,margin:'0 20px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {(owner.username).substr(0,1).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
       title = <h4 style ={{ fontSize:'15px'}}> publier par:{owner.username}</h4>
        subheader="September 14, 2016"
      />
      <CardMedia  
        component="img"
        height="500"
        image={img}
      
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
       {desc}
       {comments.map((comment)=> (
          <div key ={comment._id}>
            <h6>{comment.commentOwner.username}:{comment.desc}</h6> 
            {userInfo._id===owner._id &&   <i class ='fas fa-trash' style ={{color :'red',cursor :'pointer'}} onClick={()=>dispatch(deleteComments({postId:_id,commentId:comment._id}))}></i>
}

          </div>
        ))}
        <div>
          <form>
            <input type="text" onChange={(e)=>setCommentInfo(e.target.value)}/>
            <button type='submit' onClick={(e)=>{
              e.preventDefault();
              return dispatch(addComment({desc:commentInfo,postId:_id}))
            }}>Add Comment</button>
           </form>
        </div>
        </Typography>
      
      </CardContent>
      <CardActions disableSpacing>
        <IconButton    aria-label="add to favorites">
          <FavoriteIcon   style = {{Color: likes.find((el) => el === ( userInfo._id)) ? 'red' : 'none'}}  onClick ={()=>dispatch(LikPost(_id))}/>
        </IconButton>{likes.length}
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        

      {userInfo._id===owner._id &&  <IconButton  aria-label="delete">
    <DeleteIcon onClick ={()=>dispatch(deletePost(_id))} />
  {/* <button  onClick ={()=>dispatch(deletePost(_id))}></button> */}
      </IconButton>} 
      {userInfo._id===owner._id && <IconButton >
   <PostModel  check ={true} title ={title} desc ={desc} img ={img} id ={_id}></PostModel>
           </IconButton>}
            
             {console.log(el[0]._id)}
            <Link to ={`/description/${el[0]._id}`}> <Button size="small">Learn More</Button> </Link>    
      </CardActions>
     
      <CardActions disableSpacing>

     
        
      </CardActions>
      <Collapse itin={expanded} timeout="auto" unmountOnEx>
        
      </Collapse>
    </Card>
  );
}

export default PostCard