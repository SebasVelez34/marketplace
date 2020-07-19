import React, { lazy, Suspense } from 'react';

const LazyProductCardDetail = lazy(() => import('./ProductCardDetail'));

const ProductCardDetail = props => (
  <Suspense fallback={null}>
    <LazyProductCardDetail {...props} />
  </Suspense>
);

export default ProductCardDetail;
