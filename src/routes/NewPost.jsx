/* eslint-disable react/prop-types */
// import { useState } from 'react';
import Modal from '../components/Modal';
import classes from './NewPost.module.css';
import { Link,Form,redirect } from 'react-router-dom';

function NewPost(){

  // const [enterBody,setEnterBody] = useState('');
  // const [enterAuthor,setEnterAuthor] =useState('');
  


  // function bodyChangeHandler(event ){
         
  //     setEnterBody(event.target.value);
  // }

  

  // function authorChangeHandler(event ){
         
  //     setEnterAuthor(event.target.value);
  // }

  // function submitHandler(event){
  //   event.preventDefault();
  //   const postData ={
  //     body: enterBody,
  //     author: enterAuthor
  //   }
    
  //   props.onAddPost(postData);
  //      props.onCancel();
  // }
   

    return (
      <Modal>
       <Form method='post' className={classes.form} 
      //  onSubmit={submitHandler}
       >
              <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" name='body' required rows={3} 
                // onChange={bodyChangeHandler}
                 />
              </p>
              {/* <p>
                       {enterBody}
              </p> */}
              <p>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name"  name='author'
                // onChange={authorChangeHandler} 
                />
              </p>
              <p className={classes.actions}>
                    
                    <Link to={'..'} type='button'>Cancel</Link>
                    <button >Submit</button>
              </p>
       </Form>
       </Modal>
    );
}

export default NewPost;

export async function action({request}){
 
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); 

 await fetch('http://localhost:8080/posts',{
    method:'POST',
    body: JSON.stringify(postData),
    headers : {
      'Content-Type': 'application/json'
    }
});
      return redirect('/');
}