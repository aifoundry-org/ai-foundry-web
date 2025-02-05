import { useCallback } from 'react';
import { useSearchParams } from 'next/navigation';

/**
 * `useQueryString` is designed to simplify the management of URL query strings within Next.js applications. It leverages the useSearchParams hook from the Next.js navigation API to access and manipulate the URL's query parameters
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/useQueryString-1-0-0-b3d5b3a522c14f6bbb703e8e57073271
 */
export const useQueryString = () => {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, values: string[]) => {
      const params = new URLSearchParams(searchParams.toString());
      if (values.length > 0 && values[0] !== '') {
        params.set(name, values.join(','));
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  return { createQueryString };
};
