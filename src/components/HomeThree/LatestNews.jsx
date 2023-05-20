import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import blogOne from '../../assets/images/blog1.jpg';
import blogTwo from '../../assets/images/blog2.jpg';
import blogThree from '../../assets/images/blog3.jpg';
import SanityClient from '../../client.js';

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        786: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
}
 
const LatestNews =()=> {

    const [allpostdata,setalldata]=useState(null);
        useEffect(()=>{
            SanityClient
            .fetch(
                `*[_type=="post"]{
                    title,
                    slug,
                    body,
                    publishedAt,
                    mainImage{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    }
                }`
            ).then((data) =>{
                console.log(data)
                setalldata(data) })
            .catch(console.error);
        },[])
    
        return (
            <>
                <section id="blog" className="blog-area  uk-blog uk-section">
                    <div className="uk-container">
                        <div className="uk-section-title section-title">
                            <span>Our Company Blog</span>
                            <h2>Latest News</h2>
                            <div className="bar"></div>

                            <Link to="/blog" className="uk-button uk-button-default">View All</Link>
                        </div>

                        <OwlCarousel 
                            className="blog-slides owl-carousel-blog owl-theme"
                            {...options}
                        >
                             {allpostdata && allpostdata.map((post,index)=>
                            <div className="single-blog-post">
                                <div className="blog-post-image">
                                    <Link to={post.slug.current}>
                                        <img src={post.mainImage.asset.url} alt="news" />
                                    </Link>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">{post.publishedAt}</span>
                                    <h3><Link to={post.slug.current}>{post.title}</Link></h3>
                                    <Link to={post.slug.current} className="read-more">Read More</Link>
                                </div>
                            </div>
                             )}
                        </OwlCarousel>
                    </div>
                </section>
            </>
        );
    }

 
export default LatestNews;