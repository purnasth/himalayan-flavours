import React from 'react';
import { useParams } from 'react-router-dom';
import Meta from '../utils/Meta';
import useFetchAPI from '../hooks/useFetchAPI';
import Error404 from '../layouts/Error404';

const ArticlePage = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const { slug } = useParams();
  const key = `articlePage-${slug}`;
  const {
    data: articlePageContents,
    isLoading,
    isError,
  } = useFetchAPI(key, `${apiUrl}api_article.php`);

  if (isLoading) return null;

  if (isError) {
    console.error('Error fetching data:', isError);
    return null;
  }

  // Adjust logic based on the API response structure
  const article = Array.isArray(articlePageContents)
    ? articlePageContents.find((item) => item.slug === slug)
    : articlePageContents?.[slug];

  if (!article) {
    return <Error404 />;
  }

  const { html, title, meta_title, meta_description, meta_keywords } = article;

  return (
    <>
      <Meta
        meta_title={meta_title}
        meta_description={meta_description}
        meta_keywords={meta_keywords}
        canonicalUrl={`https://himalayan-flavours.com/${slug}`}
      />
      <main className="text-center">
        <h1 className="text-3xl capitalize leading-snug sm:text-3xl md:text-4xl lg:text-7xl lg:leading-snug">
          {title}
        </h1>
        <div
          className="space-y-8 text-center"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
    </>
  );
};

export default ArticlePage;
