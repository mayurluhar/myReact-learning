import React from "react";
import ImageList from "./imageList";

const ImageShow = ({ imageView, index }) => {

    return (
        <>
            <div className="img-show" >
                <img className="single-img" src={imageView} />
            </div>
        </>
    )
}



export default ImageShow;