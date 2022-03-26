import { List, ListItem, ListItemText, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

const HomePage = () => {
  const [users, setUser] = React.useState([]);

  const [filteredUsers, setFiltredUsers] = React.useState([]);

  const filterUsers = (evt) => {
    const targetValue = evt.target.value.trim();

    const regex = new RegExp(targetValue, "gi");

    const filteredUsersArray = users.filter(
      (user) => user.name.match(regex) || user.username.match(regex)
    );

    if (targetValue.length === 0) {
      setFiltredUsers(users);
    } else {
      setFiltredUsers(filteredUsersArray);
    }
  };

  React.useEffect(() => {
    (async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      const data = await response.json();

      if (data) {
        setUser(data);
        setFiltredUsers(data);
      }
    })();
  }, []);

  return (
    <main className="main">
      <TextField
        fullWidth
        sx={{ display: "block", width: "360px", margin: "0 auto", marginBottom: "30px" }}
        onChange={filterUsers}
      />

      <List
        sx={{
          width: "360px",
          maxWidth: 360,
          bgcolor: "background.paper",
          margin: "0 auto",
        }}
      >
        {filteredUsers &&
          filteredUsers.map((user) => (
            <ListItem sx={{ display: "flex", justifyContent: "space-between" }} key={user.id}>
              <div className="user__inner">
                <ListItemText primary={user.name} />
                <ListItemText primary={user.username} />
              </div>

              <Link to={"/posts/" + user.id}>Posts</Link>
            </ListItem>
          ))}
      </List>
    </main>
  );
};

export default HomePage;
