// import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";
// import { useState } from "react";

function Posts() {
  // const [modalVisible, setModalVisible] = useState(false);

  // function hideModalHandler() {
  //   setModalVisible(false);
  // } 

  // function showModalHandler() {
  //   setModalVisible(true);
  // } 

  return (
    <> 
      {/* <MainHeader onCreatePost={showModalHandler} /> */}

      <Outlet />
      <main>
        <PostList
          // isPosting={modalVisible}
          // onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default Posts;

export async function  loader(){
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  return resData.posts;
}