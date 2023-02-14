import { ImageComponent } from "../Image";
import {
  Card,
  Heading2,
  CardContent,
  Paragraph,
  Link,
  ImageWrapper,
} from "../styles/index";
import { ArticleItem } from '../../pages/index'

export const ArticleCard = ({article}: {article: ArticleItem}) => {
  return (
    <Card>
      <ImageWrapper>
        <ImageComponent />
      </ImageWrapper>
      <CardContent>
        <a href={article.url}>
          <Heading2>{article.title}</Heading2>
        </a>
        <Paragraph>
          {article.text}
        </Paragraph>
          <Link href={article.url} target="_blank" rel="noopener noreferrer">Read This Article</Link>
      </CardContent>
    </Card>
  );
};
