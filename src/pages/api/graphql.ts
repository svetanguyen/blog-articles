import { gql } from "@apollo/client";
import client from "../../../apollo-client";
import { ArticleItem } from '../index'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const body = JSON.parse(req.body);
  const { data }: {data: {retrievePageArticles: Array<ArticleItem>}} = await client.query({
    query: ARTICLES_QUERY,
    variables: { page: body.page },
    context: {
      headers: {
				'Content-Type': 'application/JSON'
      },
    },
  });
  
	res.status(200).json(data.retrievePageArticles)
}

const ARTICLES_QUERY = gql`
  query ArticlesQuery($page: Int!) {
    retrievePageArticles(page: $page) {
      id
      author
      createdAt
      score
      updatedAt
      title
      text
      type
      url
    }
  }
`;
