import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, List, ListItem, ListItemText, TextField, Typography } from "@mui/material";

import "./Posts.scss";

const Posts = () => {
  const navigate = useNavigate();

  const { userId } = useParams();

  const [posts, setPosts] = React.useState([]);

  const [filteredPosts, setFiltredUsers] = React.useState([]);

  const filterPosts = (evt) => {
    const targetValue = evt.target.value.trim();

    const regex = new RegExp(targetValue, "gi");

    const filteredPostsArray = posts.filter((post) => post.title.match(regex)||post.body.match(regex));

    if (targetValue.length === 0) {
      setFiltredUsers(posts);
    } else {
      setFiltredUsers(filteredPostsArray);
    }
  };

  React.useEffect(() => {
    (async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId);

      const data = await response.json();

      if (data) {
        setPosts(data);
        setFiltredUsers(data);
      }
    })();
  }, [userId]);

  return (
    <main>
      <Button onClick={() => navigate(-1)} variant="contained">
        Back
      </Button>

      <TextField
        fullWidth
        onChange={filterPosts}
        sx={{ display: "block", width: "360px", margin: "0 auto", marginBottom: "30px" }}
      />

      <List sx={{ width: "1000px", maxWidth: 1000, bgcolor: "background.paper", margin: "0 auto" }}>
        {filteredPosts &&
          filteredPosts.map((post) => (
            <ListItem
              className="post"
              key={post.id}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Typography className="post__title" variant="h6" component="h3">
                {post.title}
              </Typography>

              <ListItemText className="post__text" primary={post.body} />
              <Link to={"/comments/" + post.id}>Comments</Link>
            </ListItem>
          ))}
      </List>
    </main>
  );
};

export default Posts;
