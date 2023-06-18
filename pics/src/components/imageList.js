import React from "react";
import ImageShow from "./imageShow";

const ImageList = ({ image }) => {


    return (
        <>
            <div className="image-list">
                {image.map((imageData, index) => (
                    <ImageShow key={index} imageView={imageData.urls.full} index={index} />
                ))}
            </div>
        </>
    )
}



export default ImageList;