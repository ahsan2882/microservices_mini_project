import CreatePost from "./components/create-post/create-post.component";
import PostList from "./components/post-list/post-list.component";

function App() {
  return (
    <div className="container">
      <h1>Create neew Post</h1>
      <CreatePost />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
