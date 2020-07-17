import React, { lazy, Suspense } from 'react';

const LazyLeftAside = lazy(() => import('./LeftAside'));

const LeftAside = props => (
  <Suspense fallback={null}>
    <LazyLeftAside {...props} />
  </Suspense>
);

export default LeftAside;
