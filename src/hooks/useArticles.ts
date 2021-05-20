import { useQuery, UseQueryResult } from 'react-query';
import devApi from '../services/devto-api';
import { Article } from '../shared/types';

const fetchArticles = async (): Promise<Article[]> => {
  const response = await devApi.get<Article[]>(
    '/articles?username=vitordelfino'
  );
  return response.data;
};

export const useFetchArticles = (): UseQueryResult<Article[]> =>
  useQuery('articles', fetchArticles, {
    initialData: [],
  });
