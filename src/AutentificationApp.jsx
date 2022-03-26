import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Posts from "./Pages/Posts/Posts";
import Comments from "./Pages/Comments/Comments";

function AutentificationApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:userId" element={<Posts />} />
      <Route path="/comments/:postId" element={<Comments />} />
    </Routes>
  );
}

export default AutentificationApp;
