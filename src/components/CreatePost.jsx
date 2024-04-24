import React, { useContext, useRef } from "react";
import { PostList } from "../store/post_list_store";

export default function CreatePost() {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTilte = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    addPost(userId, postTilte, postBody, reactions, tags);
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  }
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label htmlFor="user_id" className="form-label">
            Enter your user id here
          </label>
          <input
            ref={userIdElement}
            type="text"
            className="form-control"
            id="user_id"
            placeholder="Enter the user id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label">
            Post Title
          </label>
          <input
            ref={postTitleElement}
            type="text"
            className="form-control"
            id="postTitle"
            placeholder="Enter the Title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="floatingTextarea" className="form-label">
            Post Contend
          </label>
          <textarea
            className="form-control"
            ref={postBodyElement}
            rows={4}
            placeholder="Enter the Post Contend here"
            id="floatingTextarea"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="post_reaction" className="form-label">
            Reaction
          </label>
          <input
            ref={reactionsElement}
            type="text"
            className="form-control"
            id="post_reaction"
            placeholder="Enter the post reaction"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="post_tags" className="form-label">
            Tags
          </label>
          <input
            ref={tagsElement}
            type="text"
            className="form-control"
            id="post_tags"
            placeholder="Enter the Post Tags"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}
