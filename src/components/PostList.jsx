
// import NewPost from "../routes/NewPost";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";
// import Modal from "./Modal";SS
import classes from './PostList.module.css';
// import { useState , useEffect } from "react";

function PostList({isPosting,onStopPosting}){
//   fetch('http://localhost:8080/posts').then(respose => respose.json()).then(data =>{setPosts(data.posts)});
// const [posts,setPosts]=useState([]);
// const [isFetching,setIsFetching] = useState(false);


const posts = useLoaderData();



// useEffect(()=>{
//     async function feachPosts(){
//         setIsFetching(true);
//        const respose= await fetch('http://localhost:8080/posts');
//          const resData = await respose.json();
//          setPosts(resData.posts); 
//          setIsFetching(false);
//     }
//     feachPosts();
// },[]);

   

    //  function addPostHandler(postData){
    //   fetch('http://localhost:8080/posts',{
    //       method:'POST',
    //       body: JSON.stringify(postData),
    //       headers : {
    //         'Content-Type': 'application/json'
    //       }
    //   });

    //     setPosts((exisitingPost)=>[postData,...exisitingPost]);
    //  }

    return(
        <>
           {/* {isPosting ? (
            //  <Modal 
            //  onClose={onStopPosting}
             >          
            // <NewPost 
            // onAddPost={addPostHandler}
            // onCancel={onStopPosting}
            // />
           
        //    </Modal> 
        //    )
        //     : null
        //    } */}


       { posts.length > 0 &&(
            <ul className={classes.posts}>
               {posts.map((post)=> <Post id={post.id} key={post.id} author={post.author} details={post.body} />)}              
            </ul>
        )}
        { posts.length === 0 &&(
         <div style={{textAlign:'center',color:'white'}}>
                 <h2>No Post yet!..</h2>
                 <p>Start Adding Post</p>
        </div>
        )}
        {/* {isFetching && (
            <div style={{textAlign: 'center', color : 'white'}}>
                <p>Loading Posts!...</p>
            </div>
        )} */}
        </>

    );
}
export default PostList;