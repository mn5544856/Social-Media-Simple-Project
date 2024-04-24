import { createContext, useReducer } from "react";

import React from "react";
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Pakistan",
    body: `Some quick example text to build on the card title and make up the
    bulk of the card's content.`,
    reaction: 2,
    userId: "user-9",
    tags: ["vacation", "Pakistan", "Enjoying"],
  },
  {
    id: "2",
    title: "Going to Pakistan",
    body: `Some quick example text to build on the card title and make up the
    bulk of the card's content.`,
    reaction: 2,
    userId: "user-9",
    tags: ["vacation", "Pakistan", "Enjoying"],
  },
];
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

function postListReducer(currPostList = DEFAULT_POST_LIST, action) {
  switch (action.type) {
    case "DELETE_POST":
      console.log("delete");
      return currPostList.filter((item) => item.id !== action.payload.postId);
    case "ADD_POST":
      return [...currPostList, action.payload];
    default:
      console.log("something wrong");
  }
}
export default function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  function deletePost(postId) {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  }
  function addPost(userId, postTilte, postBody, reactions, tags) {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTilte,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  }
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
}
