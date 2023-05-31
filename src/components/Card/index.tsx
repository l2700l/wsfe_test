import { StyledCard } from "./styled";
import { imageModel } from "../../types";
import Image from "../Image";

interface ICardProps {
  image: imageModel;
}

const Card = ({ image }: ICardProps) => {
  return (
    <StyledCard>
      <Image src={image.download_url} />
      <h3>{image.author}</h3>
    </StyledCard>
  );
};

export default Card;
