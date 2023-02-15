import {
  BannerWrapper,
  Heading1,
  ParagraphLg,
  BannerContent,
} from "./styles/index";

export const Banner = () => {
  return (
    <BannerWrapper>
      <BannerContent>
        <Heading1>Savoir Faire</Heading1>
        <ParagraphLg>
          it’s french. say it how it’s supposed to be said.
          <br />
          it’ll make your mouth feel funny.
        </ParagraphLg>
      </BannerContent>
    </BannerWrapper>
  );
};
