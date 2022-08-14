import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Post = Card;

const PostCard = ({ postData, onNavigate }) => {
  const { userName, userImageUrl, images, description, comments, createdAt } =
    postData;
    const headerData = [];
  ///Header
  ///midia
  //actions
  //comments
  //input
  const handleLike = () => {};

  return (
    <Post sx={{ maxWidth: 900, width: 500 }}>
      <PostHeader headerData ={headerData}/>
      <PostMedia mediaUrl={images} />
      <PostActions onLike={handleLike} />
      <PostDescription description={description} />
      <PostComments comments={comments} />
    </Post>
  );
};

export default PostCard;

const PostHeader=({userImageUrl,userName,title,createdAt,onNavigate})=>(
    <CardHeader
    avatar={
      <Avatar
        onClick={() => onNavigate(userName)}
        src={userImageUrl}
        sx={{ bgcolor: red[500] }}
        aria-label="recipe"
      ></Avatar>
    }
    title={userName}
    subheader={createdAt}
  />
);

const PostMedia = ({ mediaUrl = [] }) => (
  <CardMedia
    component="img"
    height="300"
    image={mediaUrl[0]}
    alt="Paella dish"
  />
);

const PostActions = ({}) => {
  const [isLiked, setIsLiked] = React.useState(false);
  return (
    <CardActions disableSpacing>
      <IconButton
        onClick={(e) => setIsLiked(!isLiked)}
        aria-label="add to favorites"
      >
        <FavoriteIcon style={{ color: isLiked ? "red" : "" }} />
      </IconButton>
    </CardActions>
  );
};

const PostDescription = ({ description = "" }) => {
  return (
    <CardContent>
      <Typography variant="h7">{description}</Typography>
    </CardContent>
  );
};

const PostComments = ({ comments = [] }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {comments.map(({ comment, userName }, index) => {
            return (
              <div key={index}>
                <Typography
                  style={{ fontSize: 14, float: "left", fontWeight: "bold" }}
                >
                  {userName + ": "}
                </Typography>
                <Typography
                  color="text.secondary"
                  style={{ fontSize: 14 }}
                  paragraph
                >
                  {comment}
                </Typography>
              </div>
            );
          })}
        </CardContent>
      </Collapse>
      <Typography
        color="text.secondary"
        marginLeft={2}
        onClick={(e) => setExpanded(!expanded)}
      >
        {expanded ? "hide comments" : "show comments"}
      </Typography>
    </div>
  );
};
