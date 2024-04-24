import "bootstrap/dist/css/bootstrap.css";

// import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import PostListProvider from "./store/post_list_store";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app_container ">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab == "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
