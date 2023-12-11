import React from "react"

const Cards = (props) => {
    console.log(props)
    return(
        <>
         <div className="card text-white m-4 cus-card-css">
          <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">S{props.description}</p>
         </div>
      </div>
        </>
    )
}

export default Cards;