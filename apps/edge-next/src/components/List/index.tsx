import { useRouter } from 'next/router';
import React from 'react';
import { useUserState } from '../../atoms/userAtom';
import { Presenter } from './presenter';
import { useGetMessages } from './useGetMessages';

export function List() {
  const { setUser } = useUserState();
  const router = useRouter();
  const { isLoading, isError, data, error } = useGetMessages();

  if (isLoading) <span>Loading...</span>;
  if (isError) {
    console.error('Error: useGetMessages', error);
    setUser(null);
    router.push('../../pages/index');
  }

  return <>{data && <Presenter data={data} router={router} />}</>;
}
