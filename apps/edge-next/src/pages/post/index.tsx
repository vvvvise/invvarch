import React from 'react';
import { Layout } from '../../components/Layout';
import { Post } from '../../components/Post';
import NextPageWithLayout from '../_app';

const Page: typeof NextPageWithLayout = () => {
  return <Layout><Post /></Layout>;
};

export default Page;
