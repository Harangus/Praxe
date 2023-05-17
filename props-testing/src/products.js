import React from "react";

function MyProducts(props)
{
    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.description}</h1>
            <h1>{props.value}</h1>
        </div>
    );
}

export default MyProducts;