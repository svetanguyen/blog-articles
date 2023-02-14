import { ArticleCard } from "./ArticleCard";
import { ArticleItem } from "../../pages/index";
import { useEffect, useState, useRef, MutableRefObject } from "react";

export const ArticlesList = ({
  articles,
}: {
  articles: Array<ArticleItem>;
}) => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [currentArticles, setCurrentArticles] = useState(articles);
  const [page, setPage] = useState(2);
  const wrapper = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (!wrapper.current) return;

    function trackLastArticle() {
      if (
        window.innerHeight + window.scrollY >=
        wrapper.current.offsetHeight + wrapper.current.offsetTop
      ) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    }

    document.addEventListener("scroll", trackLastArticle);

    return () => {
      document.removeEventListener("scroll", trackLastArticle);
    };
  }, [wrapper]);

  useEffect(() => {
    if (!isScrolledDown) return;

    async function getData() {
      let response = await fetch("/api/graphql", {
        method: "POST",
        body: JSON.stringify({ page: page }),
      });
      let data: Array<ArticleItem> = await response.json();
			
      if (data?.length > 0) {
        setCurrentArticles([...currentArticles, ...data]);
        setPage(page + 1);
      }
    }

    getData();
  }, [isScrolledDown]);

  return (
    <div ref={wrapper}>
      {currentArticles.map((article: ArticleItem) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};
