import React from "react";

const Youtube = (props) =>{

    const {dataurl} = props;

    return (
        <div>
            <iframe width="100%" height="500px" src={dataurl} title="Youtube Video Player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>  
        </div>

    ) 
}
export default Youtube