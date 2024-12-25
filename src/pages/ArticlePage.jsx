import React from 'react';
import { useParams } from 'react-router-dom';
import Meta from '../utils/Meta';
import useFetchAPI from '../hooks/useFetchAPI';

const ArticlePage = () => {
  const { slug } = useParams();
  const key = `articlePage-${slug}`;
  const {
    data: articlePageContents,
    isLoading,
    isError,
  } = useFetchAPI(
    key,
    'https://mayurstay.com/himalayanflavours/api/api_article.php',
  );

  if (isLoading) return <></>;
  if (isError) {
    console.error('Error fetching data:', isError);
    return <></>;
  }

  // Adjust logic based on the API response structure
  const article = Array.isArray(articlePageContents)
    ? articlePageContents.find((item) => item.slug === slug)
    : articlePageContents?.[slug];

  if (!article) {
    return <div>No article found for slug: {slug}</div>;
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
      <main>
        <h1 className="my-10 text-center text-3xl capitalize leading-snug sm:text-3xl md:text-4xl lg:text-7xl lg:leading-snug">
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
