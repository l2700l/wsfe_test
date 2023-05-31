import React from "react";
import { StyledImage } from "./styled";

interface IImageProps {
  src: string;
  alt?: string;
}

const Image = ({ src, alt = "Awesome image…" }: IImageProps) => {
  return <StyledImage src={src} alt={alt} loading={"lazy"} />;
};

export default Image;
