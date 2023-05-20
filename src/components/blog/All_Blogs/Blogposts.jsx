import React from "react";
import { Link } from "react-router-dom";


const Blogpost = ({allpostdata,loading})=>{
    if(loading) {
  
       
    }
    return(
    
    <section className="blog-area uk-blog uk-section">
   
        <div className="uk-container">
       
            <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
            {allpostdata && allpostdata.map((post,index)=>
                <div className="single-blog-post">
               
                                                   <div className="blog-post-image">
                                                   
                                                   <Link to={'/'+ post.slug.current} key={post.slug.current}>
                                                       <img src={post.mainImage.asset.url} alt="blog" />
                                                   </Link>
                                               </div>
                    <div className="blog-post-content">
                        <span className="date">{post.publishedAt}</span>
                        <h3><Link to={post.slug.current}>{post.title}</Link></h3>
                        <Link to={ post.slug.current} className="read-more">Read More</Link>
                    </div>
                </div>
                  )}
            </div>


        </div>
       
    </section>
    );
}
export default Blogpost;