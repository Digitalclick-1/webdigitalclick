import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import Footer from '../../Common/Footer';

import NavigationTwo from '../../Navigation/Navigation2';
import SanityClient from '../../../client.js';
import Blogpost from './Blogposts';
import Pagination from './pagination';
const Blog  =()=> {
   
        const [allpostdata,setalldata]=useState([]);
        const [loading,setloading]=useState([]);
        const [currentPage,setcurrentPage]=useState(1);
        const [postPerPage,setPostPerPage]=useState(6);
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

        const lastPostIndex=currentPage * postPerPage;
        const firstPostIndex = lastPostIndex - postPerPage;
        const currentPosts = allpostdata.slice(firstPostIndex,lastPostIndex);
        const paginate = (pagenumber)=>setcurrentPage(pagenumber);
        console.log(currentPage);
        return (
            <>
            {/* <NavigationTwo/> */}
            <section class="page-title-area uk-page-title">
        <div class="uk-container">

            <h1>Blog</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li>Blog</li>
            </ul>
        </div>
    </section>
    <Blogpost allpostdata={currentPosts} loading={loading}/>
    {console.log(currentPosts)}
    <Pagination postperpage={postPerPage} totalPosts={allpostdata.length} paginate={paginate}/>

                
                {/* <Footer /> */}
            </>
        );
}
 
export default Blog;