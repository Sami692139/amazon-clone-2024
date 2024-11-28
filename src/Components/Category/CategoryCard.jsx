/* eslint-disable react/prop-types */
import React from "react";
import classes from "./category.module.css";
import { Link } from "react-router-dom";


const CategoryCard = ({data})=> {  // data is consider as props
  console.log(data);
  return (
    <div className={classes.category} >
      {/* <link to change to link to */}
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data?.title}</h2>
        </span>
        
        <img src={data?.imgLink} alt="" />
        <p>Shop now</p>

      </Link>
      
    </div>
  )
}

export default CategoryCard;
