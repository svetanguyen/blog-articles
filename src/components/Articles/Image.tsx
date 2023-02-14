import Image from "next/image";
import { ImageWrapper } from "../styles/index";
import { useUrlMetada } from "../../hooks/useUrlMetadata";

export const ImageComponent = ({
  response,
}: {
  response: string;
}) => {
  const image = useUrlMetada(response);
  return (
    <ImageWrapper>
      {image ? (
        <img src={image} />
      ) : (
        <Image
          src={"/image.png"}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      )}
    </ImageWrapper>
  );
};
