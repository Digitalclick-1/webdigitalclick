import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './pagination.css';
const Pagination = ({postperpage,totalPosts,paginate}) =>{
    let pages=[];
    for( let i=1; i<=Math.ceil (totalPosts/postperpage); i++)
    {
        pages.push(i);
    }
    return(
            <div className="b-pagination-outer">
              
            <ul id="border-pagination">

            {pages.map(number=>( 
              <li  key={number} ><a onClick={() => paginate(number)} className="active">{number}</a>
              
              </li>
              
              ))}
                  </ul> 
                  </div>
        );
    }
export default Pagination;
