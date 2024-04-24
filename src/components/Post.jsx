import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as PostListData } from "../store/post_list_store";
export default function Post({ post }) {
  const { deletePost } = useContext(PostListData);
  return (
    <>
      <div className="card post-card post-card" style={{ width: "18rem" }}>
        <div className="card-body">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDelete onClick={() => deletePost(post.id)} />
            <span className="visually-hidden">unread messages</span>
          </span>

          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span className="badge text-bg-primary mx-1" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="alert alert-success" role="alert">
          A simple success alert—check it out!
        </div>
      </div>
    </>
  );
}
