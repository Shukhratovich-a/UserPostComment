import { Button, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./Comments.scss";

const Comments = () => {
  const { postId } = useParams();
  const [comments, setCommnets] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?postId=" + postId
      );

      const data = await response.json();

      if (data) {
        setCommnets(data);
      }
    })();
  }, [postId]);

  return (
    <main>
      <Button onClick={() => navigate(-1)} variant="contained">
        Back
      </Button>

      <List sx={{ width: "1000px", maxWidth: 1000, bgcolor: "background.paper", margin: "0 auto" }}>
        {comments &&
          comments.map((comment) => (
            <ListItem key={comment.id} className="comment">
              <ListItemText className="comment__text" primary={comment.body} />
            </ListItem>
          ))}
      </List>
    </main>
  );
};

export default Comments;
