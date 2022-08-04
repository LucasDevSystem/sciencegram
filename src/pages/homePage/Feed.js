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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Input, TextField } from "@mui/material";

export default function Feed({ feedData = [] }) {
  return (
    <div>
      {feedData.map((postData, index) => {
        return <div key={index}><PostCard  postData={postData} /></div>;
      })}
    </div>
  );
}

const PostCard = ({ postData, key }) => {
  const [expanded, setExpanded] = React.useState(false);
  const { userName, userImageUrl, images, description, comments, createdAt } =
    postData;
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 900, width: 500 }}>
      <CardHeader
        avatar={
          <Avatar
            src={userImageUrl}
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={userName}
        subheader={createdAt}
      />
      <CardMedia
        component="img"
        height="300"
        image={images[0]}
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton
          onClick={(e) => setIsLiked(!isLiked)}
          aria-label="add to favorites"
        >
          <FavoriteIcon style={{ color: isLiked ? "red" : "" }} />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography variant="h7">{description}</Typography>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {comments.map(({ comment, userName },index) => {
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
      <p onClick={(e) => setExpanded(!expanded)}>
        {expanded ? "hide comments" : "show comments"}
      </p>
    </Card>
  );
};
