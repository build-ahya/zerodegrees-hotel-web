"use client";
import { AnyObject, QueryParams } from '@/types';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const useQueryParams = (): QueryParams => {
  const search = useSearchParams();
  const [queryParams, setQueryParams] = useState<QueryParams>({
    checkIn: 0,
    checkOut: 0,
    adults: 1,
    children: 0,
  });

  useEffect(() => {
    // Safely read and coerce numeric query params; fall back to defaults
    const numeric = (key: string, fallback: number): number => {
      const val = search.get(key);
      const num = val !== null ? Number(val) : NaN;
      return Number.isFinite(num) ? num : fallback;
    };

    setQueryParams({
      checkIn: numeric('checkIn', 0),
      checkOut: numeric('checkOut', 0),
      adults: numeric('adults', 1),
      children: numeric('children', 0),
    });
  }, [search]);

  return queryParams;
};

export default useQueryParams;
