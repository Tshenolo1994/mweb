import React from 'react'
import Marquee from "react-fast-marquee";
import images from "./logos"

const LogoMarquee = () => {
  const style = {
   width:"140px",
   marginRight:"50px",
   position:'relative',
   backgroundColor:"#FAF9F9",
  };

    const logos = images.map((image) => {
        return <img  style={style}  key={image.id} src={require(`../assets/logos/${image.url}`)} alt={image.description} />
      }); 
  return (
    <Marquee gradientColor={[250,249,249]} gradientWidth="500" >
   {logos}

  </Marquee>
  )
}

export default LogoMarquee