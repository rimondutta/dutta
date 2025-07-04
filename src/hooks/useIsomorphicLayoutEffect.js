import { useEffect, useLayoutEffect } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
