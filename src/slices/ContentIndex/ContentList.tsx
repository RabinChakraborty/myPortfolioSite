'use client';
import React, { useState, useEffect } from 'react';
import { Content } from '@prismicio/client';

type ContentListProps = {
  items: Content.BlogPostDocument[] | Content.ProjectDocument[];
  contentType: Content.BlogPostIndexSlice['primary']['content_type'];
  fallbackItemImage: Content.BlogPostIndexSlice['primary']['fallback_item_image'];
  viewMoreText: Content.BlogPostIndexSlice['primary']['view_more_text'];
};

const ContentList = ({
  items,
  contentType,
  fallbackItemImage,
  viewMoreText = 'Read More',
}: ContentListProps) => {
  return <div>hello</div>;
};

export default ContentList;
