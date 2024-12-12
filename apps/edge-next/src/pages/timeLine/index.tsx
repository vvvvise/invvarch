import React from 'react';
import { Layout } from '../../components/Layout';
import { List } from '../../components/List';
import NextPageWithLayout from '../_app';

const Page: typeof NextPageWithLayout = () => {
  return <Layout><List /></Layout>;
};

export default Page;
