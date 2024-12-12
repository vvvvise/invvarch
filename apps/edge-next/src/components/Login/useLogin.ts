import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo } from 'react';
import { useCookies } from 'react-cookie';
import { useUserState } from '../../atoms/userAtom';
import { useSetCsrf } from './useSetCsrf';
import { Login } from '../../types/form';

export const useLogin = () => {
  const { setUser } = useUserState();
  const { setCsrf } = useSetCsrf();
  const router = useRouter();
  const params = useMemo(() => new URLSearchParams(), []);
  const [cookies, setUseCookies] = useCookies(['_csrf']);

  useEffect(() => {
    setUseCookies('_csrf', cookies._csrf);
  }, [cookies._csrf, setUseCookies]);

  const login = useCallback(
    async (Inputs: Login) => {
      await setCsrf();

      params.append('email', Inputs.email);
      params.append('password', Inputs.password);

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        headers: {
          'X-CSRF-TOKEN': cookies._csrf,
        },
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: params,
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
          router.push('/timeLine');
        })
        .catch((error) => {
          console.error('Error:', error);
          setUser(null);
          router.push('../../pages/index');
        });
    },
    [cookies._csrf, params, router, setCsrf, setUser],
  );

  return { login };
};
