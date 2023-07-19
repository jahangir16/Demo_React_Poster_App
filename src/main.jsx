import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import NewPost , {action as NewPostAction} from './routes/NewPost'
import RootLayout from './routes/RootLayout'
import Posts, { loader as PostLoader} from './routes/Posts'
import PostDetails ,{loader as PostDetailsLoader} from './routes/PostDetails'

const router = createBrowserRouter([
  {path: '/', element : <RootLayout /> ,
   children: [
                {path: '/' , element : <Posts /> ,
                loader: PostLoader,
                children: [
                  
                       {path: '/newPost' , element: <NewPost />, action:NewPostAction  },
                       {path: '/:id' , element: <PostDetails />,loader: PostDetailsLoader }

                ]}
                
  ]},
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
)
