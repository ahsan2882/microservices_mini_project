import axios from "axios";
import { useState } from "react";

export default function CreateComment({ postId }) {
  const [content, setContent] = useState("");

  const onContentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="comment">New Comment</label>
          <textarea
            className="form-control"
            id="comment"
            rows="3"
            value={content}
            onChange={onContentChangeHandler}
          ></textarea>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
