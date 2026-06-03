import axios from "axios";
import { useEffect, useState } from "react";
import CreateComment from "../create-comment/create-comment.component";
import CommentList from "../comment-list/comment-list.component";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPostHandler = async () => {
      const response = await axios.get("http://localhost:4002/posts");
      setPosts(Object.values(response.data));
    };
    fetchPostHandler();
  }, []);
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {posts.map((post) => (
        <div
          key={post.id}
          className="card"
          style={{ maxWidth: "540px", width: "30%", marginBottom: "20px" }}
        >
          <div className="card-body">
            <h3 className="card-title">{post.title}</h3>
            <CommentList comments={post.comments} />
            <CreateComment postId={post.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
