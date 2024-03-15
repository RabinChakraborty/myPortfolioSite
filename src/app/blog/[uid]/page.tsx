import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Bounded from '@/app/Components/Bonded';
import Heading from '@/app/Components/Heading';
import { DateField, isFilled } from '@prismicio/client';
import ContentBody from '@/app/Components/ContentBody';

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID('blog_post', params.uid)
    .catch(() => notFound());

  return <ContentBody page={page} />;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID('blog_post', params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType('blog_post');

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
