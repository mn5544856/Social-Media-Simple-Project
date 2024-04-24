import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post_list_store";
export default function PostList() {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
