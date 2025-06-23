import { useFrame } from '@darkroom.engineering/hamo';
import { useMemo } from 'react';
import _Stats from 'stats.js';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';

function Stats() {
  const stats = useMemo(() => {
    if (typeof window !== 'undefined') {
      return new _Stats();
    }
    return undefined;
  }, []);

 

  return null;
}
export default Stats;
