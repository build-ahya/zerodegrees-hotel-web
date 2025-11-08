import { AnyObject } from '@/types';
import { useState, useEffect } from 'react';

const useQueryParams = () => {
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    if (window === undefined) {
      return;
    }
    const query = new URLSearchParams(
      window.location.search
    ) as unknown as AnyObject[];
    const params: AnyObject = {};
    query.forEach((value, key) => {
      params[key] = value;
    });
    setQueryParams(params);
  }, []);

  return queryParams;
};

export default useQueryParams;
