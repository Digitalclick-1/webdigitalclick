import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {logo} from '../../../assets/images/logo2.png'
import clientOne from '../../../assets/images/client1.png';
import clientTwo from '../../../assets/images/client2.png';
import clientThree from '../../../assets/images/client3.png';
import blogOne from '../../../assets/images/blog1.jpg';
import blogTwo from '../../../assets/images/blog2.jpg';
import blogThree from '../../../assets/images/blog3.jpg';
import sanityClient from '../../../client.js';
import BlockContent from '@sanity/block-content-to-react';
import ImageUrlBuilder from "@sanity/image-url";
import NavigationTwo from '../../Navigation/Navigation2';
import SingleBlogNav from '../../Navigation/SingleBlogNav';
const builder = ImageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}
const SingleBlog =()=> {
    const [postdata,setPostdata]=useState(null);
    const [currentPage,setcurrentPage]=useState(1);
    const [postPerPage,setPostPerPage]=useState(1);
    const {slug}=useParams();

    useEffect(()=>{
        sanityClient.fetch(`
        *[slug.current== $slug]{
            title,
            slug,
            publishedAt,
            Categories,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name":author->name,
            "authorImage":author->image
        }
        `,
        {slug}
        ).then((data)=>{
            console.log(data)
            setPostdata(data)})
            // document.getElementById('block_body')
        .catch(console.error);
    },[slug]);
    const paginate = (pagenumber)=>setcurrentPage(pagenumber);
    console.log(currentPage);
    if (!postdata) return <div>Loading...</div>;
   
        return (
            <>
              {/* <NavigationTwo/> */}
                {/*  Start Page Title Area */}
                <section className="">
                {postdata && postdata.map((post,index)=>
                    <div className="uk-container">
                        <div className='singleblogHeader'>
                        <h2>{post.title}</h2>
                        </div> 
                        {/* <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Blog</li>
                        </ul> */}
                    </div>
                        )}
                </section>
                {/* End Page Title Area */}


                {/* End Mobile Navbar */}

                {/* Start Navbar Area */}
                
                {/*  Start Blog Details Area */}
                <section className="blog-details-areax uk-blog-detailsx uk-sectionx">
                {postdata && postdata.map((post,index)=>
                    <div className="uk-container">
                        <article className="uk-article blog-details">
                            <div className="uk-grid uk-flex">
                                <div className="inner uk-width-expand">
                                    <div className="article-img">
                                        <img src={post.mainImage.asset.url} alt="blog-details" />
                                        <div className="date">{post.publishedAt}</div>
                                    </div>
                   
                                    <div className="article-content" id='article-contentbody'>
                                        <ul className="category">
                                            <li><Link to="#">{post.Categories}</Link></li>
                                        </ul>
                                            
                                        <h3>{post.title}</h3>
                                    <p></p>
                                        
                                    <div id="block_body">
                                    <BlockContent
          blocks={post.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />

                                    </div>
                                    </div>

                                    {/* <div className="post-controls-buttons uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
                                        <div className="item">
                                            <Link to={post.slug} className="uk-button uk-button-default">Prev Post</Link>
                                        </div>
                                        
                                            
                                        
                                        <div className="item uk-text-right">
                                            <Link to={post.slug} className="uk-button uk-button-default">Next Post</Link>
                                        </div>
                                    </div>

                                    <div id="comments" className="comments-area">
                                        <h2 className="comments-title">3 Comments</h2>

                                        <ol className="comment-list">
                                            <li className="comment">
                                                <article className="comment-body">
                                                    <footer className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src={clientOne} alt="client" className="avatar" />
                                                            <b className="fn">John Smith</b>
                                                            <span className="says">says:</span>
                                                        </div>

                                                        <div className="comment-metadata">
                                                            <Link to="#">
                                                                March 28, 2019 at 7:16 am
                                                            </Link>
                                                        </div>
                                                    </footer>

                                                    <div className="comment-content">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat Link ante. It is Link long established fact that Link reader will be distracted by the readable content of Link page when looking at its layout.</p>
                                                    </div>

                                                    <div className="reply">
                                                        <Link to="#" rel="nofollow" className="comment-reply-link">Reply</Link>
                                                    </div>
                                                </article>

                                                <ol className="children">
                                                    <li className="comment">
                                                        <article className="comment-body">
                                                            <footer className="comment-meta">
                                                                <div className="comment-author vcard">
                                                                    <img src={clientTwo} alt="client" className="avatar" />
                                                                    <b className="fn">John Smith</b>
                                                                    <span className="says">says:</span>
                                                                </div>

                                                                <div className="comment-metadata">
                                                                    <Link to="#">
                                                                        March 28, 2019 at 7:16 am
                                                                    </Link>
                                                                </div>
                                                            </footer>

                                                            <div className="comment-content">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat Link ante. It is Link long established fact that Link reader will be distracted by the readable content of Link page when looking at its layout.</p>
                                                            </div>

                                                            <div className="reply">
                                                                <Link to="#" rel="nofollow" className="comment-reply-link">Reply</Link>
                                                            </div>
                                                        </article>
                                                    </li>
                                                </ol>
                                            </li>

                                            <li className="comment">
                                                <article className="comment-body">
                                                    <footer className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src={clientThree} alt="client" className="avatar" />
                                                            <b className="fn">John Smith</b>
                                                            <span className="says">says:</span>
                                                        </div>

                                                        <div className="comment-metadata">
                                                            <Link to="#">
                                                                March 28, 2019 at 7:16 am
                                                            </Link>
                                                        </div>
                                                    </footer>

                                                    <div className="comment-content">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat Link ante. It is Link long established fact that Link reader will be distracted by the readable content of Link page when looking at its layout.</p>
                                                    </div>

                                                    <div className="reply">
                                                        <Link to="#" rel="nofollow" className="comment-reply-link">Reply</Link>
                                                    </div>
                                                </article>
                                            </li>
                                        </ol>

                                        <div id="respond" className="comment-respond">
                                            <h3 className="comment-reply-title">Leave Link Reply</h3>

                                            <form id="commentform" className="comment-form">
                                                <p className="comment-notes">Your email address will not be published.</p>
                                                
                                                <p className="comment-form-comment">
                                                    <textarea id="comment" placeholder="Comment" cols="45" rows="5" />
                                                </p>
                                                <p className="comment-form-author">
                                                    <input id="author" placeholder="Name" type="text" />
                                                </p>
                                                <p className="comment-form-email">
                                                    <input id="email" placeholder="Email"  type="text" />
                                                </p>
                                                <p className="comment-form-url">
                                                    <input id="url" placeholder="Website" type="text" />
                                                </p>
                                                <p className="form-submit">
                                                    <input name="submit" type="submit" id="submit" className="submit" value="Post Comment" />
                                                </p>
                                            </form>
                                        </div>
                                    </div> */}
                                </div>

                                <div className="uk-sidebar uk-width-1-5">
                                    <div className="widget widget_search">
                                        <form>
                                            <input type="text" className="uk-input" placeholder="Search here..." />
                                            <button type="submit"><i className="flaticon-search"></i></button>
                                        </form>
                                    </div>
                                    
                                    <div className="widget widget_categories">
                                        <h3 className="widget-title">Categories</h3>
                                        <div className="bar"></div>

                                        <ul>
                                            <li><Link to="#">Blockchain Consultant</Link></li>
                                            <li><Link to="#">Crypto Nft Market</Link></li>
                                            <li><Link to="#">Blockchain Development</Link></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="widget widget_recent_entries">
                                        <h3 className="widget-title">Recent Posts</h3>
                                        <div className="bar"></div>

                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <img src={blogOne} alt="blog" />
                                                </Link>

                                                <h5><Link to="#">The Most Popular New top Business Apps</Link></h5>
                                                <p className="date">21 March, 2019</p>
                                            </li>

                                            <li>
                                                <Link to="#">
                                                    <img src={blogTwo} alt="blog" />
                                                </Link>

                                                <h5><Link to="#">3 WooCommerce Plugins to Boost Sales</Link></h5>
                                                <p className="date">20 March, 2019</p>
                                            </li>

                                            <li>
                                                <Link to="#">
                                                    <img src={blogThree} alt="blog" />
                                                </Link>

                                                <h5><Link to="#">The Best Marketing top Management Tools</Link></h5>
                                                <p className="date">27 March, 2019</p>
                                            </li>

                                            <li>
                                                <Link to="#">
                                                    <img src={blogOne} alt="blog" />
                                                </Link>

                                                <h5><Link to="#">How to Build Link Business Dashboard</Link></h5>
                                                <p className="date">27 January, 2019</p>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    {/* <div className="widget widget_tag_cloud">
                                        <h3 className="widget-title">Tags</h3>
                                        <div className="bar"></div>

                                        <div className="tagcloud">
                                            <Link to="#">crypto</Link>
                                            <Link to="#">Nft</Link>
                                            <Link to="#">Development</Link>
                                            <Link to="#">Metaverse</Link>
                                            <Link to="#">smart contract</Link>
                                            <Link to="#">Social Media</Link>
                                            <Link to="#">consultant</Link>
                                            <Link to="#">web3.0</Link>
                                            <Link to="#">marketing</Link>
                                        </div>
                                    </div> */}
                                    
                                    {/* <div className="widget widget_archive">
                                        <h3 className="widget-title">Archives</h3>
                                        <div className="bar"></div>

                                        <ul>
                                            <li><Link to="#">December 2018</Link></li>
                                            <li><Link to="#">January 2019</Link></li>
                                            <li><Link to="#">February 2019</Link></li>
                                            <li><Link to="#">March 2019</Link></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </article>
                    </div>
                      )}
                </section>

                {/* <Footer /> */}
            </>
        );
    }
 
export default SingleBlog;