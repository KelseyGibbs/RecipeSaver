import React from "react";

function BookDetail(props) {
  return (
    <div>

      <div className="text-center">
        <h2>Title: {props.title1}</h2>
        <h3>Author(s): {props.authors1}</h3>
        <img alt={props.title1} className="img-fluid" src={props.src1} style={{ margin: "0 auto" }} />
        <p> {props.description1} </p>
        <a href="{props.link1}">Get more Information</a>
      </div>
          
          <div className="text-center">
       <h2>Title: {props.title2}</h2>
        <h3>Author(s): {props.authors2}</h3>
        <img alt={props.title2} className="img-fluid" src={props.src2} style={{ margin: "0 auto" }} />
        <p> {props.description2} </p>
       <a href="{props.link2}">Get more Information</a>
     </div>

     <div className="text-center">
       <h2>Title: {props.title3}</h2>
        <h3>Author(s): {props.authors}</h3>
        <img alt={props.title3} className="img-fluid" src={props.src3} style={{ margin: "0 auto" }} />
        <p> {props.description3} </p>
       <a href="{props.link3}">Get more Information</a>
     </div>

     <div className="text-center">
       <h2>Title: {props.title4}</h2>
        <h3>Author(s): {props.authors4}</h3>
        <img alt={props.title4} className="img-fluid" src={props.src4} style={{ margin: "0 auto" }} />
        <p> {props.description4} </p>
       <a href="{props.link4}">Get more Information</a>
     </div>

   </div>
  );
}

export default BookDetail;
