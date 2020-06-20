import React from 'react';


const ImageList=(props)=>{

    // console.log(props.image);

    const Image =props.image.map((images) =>{
            return   <img alt={images.description} key={images.id}  src={images.urls.regular} /> 
        } );
    
    
    return <div> {Image} </div>;
}

export default ImageList;