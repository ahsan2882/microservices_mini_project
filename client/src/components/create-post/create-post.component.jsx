import axios from "axios";
import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const onTitleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios.post("http://posts.com/posts/create", { title });
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="titleField">Title</label>
          <input
            type="text"
            className="form-control"
            id="titleField"
            value={title}
            onChange={onTitleChangeHandler}
          />
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
