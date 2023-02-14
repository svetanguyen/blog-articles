import {
  Card,
  Heading2,
  CardContent,
  Paragraph,
  Link,
} from "../styles/index";
import { ArticleItem } from "../../pages/index";
import { useEffect, useState } from "react";
import axios from "axios";
import { ImageComponent } from './Image'

export const ArticleCard = ({ article }: { article: ArticleItem }) => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    if (!article.url) return;
    async function fetchData() {
      const headers = {
        "Content-Type": "text/html, text/plain",
      };
      try {
        const response = await axios.get(article.url, { headers });
        if (response) setResponse(response.data)
      } catch (err) {
        console.log("error", err);
      }
    }
    fetchData();
  }, []);

  return (
    <Card>
      <ImageComponent response={response} />
      <CardContent>
        <a href={article.url}>
          <Heading2>{article.title}</Heading2>
        </a>
        <Paragraph>{article.text}</Paragraph>
        <Link href={article.url} target="_blank" rel="noopener noreferrer">
          Read This Article
        </Link>
      </CardContent>
    </Card>
  );
};
