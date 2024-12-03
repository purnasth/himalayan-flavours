import React from 'react';
import { useParams } from 'react-router-dom';

import { articlePageContents } from '../constants/data';
import Meta from '../utils/Meta';

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articlePageContents[slug];

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
