import type { ReactNode } from 'react';
import { Presenter } from './presenter';
import useLogout from './useLogout';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const { logout } = useLogout();

  return (
    <>
      <Presenter logout={logout} />
      {children}
    </>
  );
}
