import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllposts } from '../actions/postActions'
import './post.css'

const Posts = (props) => {
    const posts = useSelector(state => state.postR.posts)
    const dispatch=useDispatch()
    const [post, setPost] = useState(null)

console.log("posts===>",posts)
console.log("props.match.params.id===>",props.match.params.id)
useEffect(()=>{
  // posts && setPost(posts.filter(el=>el.id===props.match.params.id)[0])
  dispatch(getAllposts())
  // setPost(posts.find((el) => (el._id = props.match.params.id)));
},[dispatch]);
   console.log("posts===========>",posts)
  const  f = posts ?  posts.filter(el=>el.category===props.match.params.id)  : null

   console.log("posts filtré",f)

    return (

        <div>
        <br></br>            
        <br></br>
        {f && f.map(el=><div>
        <div class="blog-card">
        <div class="meta">
      <div class="photo" style={{backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)'}}></div>
      <ul class="details">
        <li class="author"><a href="#">John Doe</a></li>
        <li class="date">Aug. 24, 2015</li>
        <li class="tags">
          <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
          </ul>
        </li>
      </ul>
    </div>
        <div class="description">
      <h1>{el.title}</h1>
      <br></br>
      <i class="fa fa-map-marker" aria-hidden="true"></i>
      <h2>{el.city}</h2>
      <p> {el.description}</p>
      <p class="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
        </div>
        <div class="blog-card alt">
    <div class="meta">
      <div class="photo" style={{backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)'}}></div>
      <ul class="details">
        <li class="author"><a href="#">Jane Doe</a></li>
        <li class="date">July. 15, 2015</li>
        <li class="tags">
          <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">JavaScript</a></li>
          </ul>
        </li>
      </ul>
    </div>
    
  </div>
        </div>) }
        


        
        </div>

    )
}
export default Posts
