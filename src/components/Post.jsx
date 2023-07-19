
import classes from './Post.module.css';
import { Link } from 'react-router-dom';
function Post(prop) {
   
 return (
    <div className={classes.post}>
     <Link to={prop.id}>
    <h4 className={classes.author}>{prop.author}</h4>
    <p className={classes.text}>{prop.details}</p>
    </Link>
    </div>
 );
}
export default Post;