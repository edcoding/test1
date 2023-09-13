import React from "react";


const ImageList =(props)=>{

    const imagesL=props.images.map((image)=>{
    return <img key={image.id} src={image.webformatURL} alt=""/>
})

  return(
    <div>
        {imagesL}
    </div>
  )
    
}
export default ImageList