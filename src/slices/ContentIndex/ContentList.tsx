'use client';
import React, { useState, useEffect } from 'react';
import { Content } from '@prismicio/client';
import { MdArrowOutward } from 'react-icons/md';

type ContentListProps = {
  items: Content.BlogPostDocument[] | Content.ProjectDocument[];
  contentType: Content.ContentIndexSlice['primary']['content_type'];
  fallbackItemImage: Content.ContentIndexSlice['primary']['fallback_item_image'];
  viewMoreText: Content.ContentIndexSlice['primary']['view_more_text'];
};

const ContentList = ({
  items,
  contentType,
  fallbackItemImage,
  viewMoreText = 'Read More',
}: ContentListProps) => {
  const urlPrefix = contentType === 'Blog' ? '/blog' : '/project';
  return (
    <ul className='grid border-b border-b-slate-100'>
      {items.map((item, index) => (
        <li key={index} className='list-item opacity-0f'>
          <a
            href={urlPrefix + '/' + item.uid}
            className='flex flex-col justify-between border-t border-t-slate-100 text-slate-200 md:flex-row'
          >
            <div className='flex flex-col'>
              <span className='text-3xl font-bold'>{item.data.title}</span>
              <div className='flex gap-3 text-yellow-400 text-lg font-bold'>
                {item.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
            <span className='ml-auto flex items-center gap-2 text-xl font-medium md:ml-0'>
              {viewMoreText} <MdArrowOutward />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContentList;
