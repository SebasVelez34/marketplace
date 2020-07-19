import React, { lazy, Suspense } from 'react';

const LazyContainerProducts = lazy(() => import('./ContainerProducts'));

const ContainerProducts = props => (
  <Suspense fallback={null}>
    <LazyContainerProducts {...props} />
  </Suspense>
);

export default ContainerProducts;
