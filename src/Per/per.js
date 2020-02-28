import React from "react";
const Per = (props) => {
    return (
        <div>
            <h1 onClick={props.click}>{props.name}</h1>
            <p>{props.children}</p>
        </div>
    )
}
export default Per;