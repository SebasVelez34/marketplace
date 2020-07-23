import React, { lazy, Suspense } from 'react';

const LazyProductScreen = lazy(() => import('./ProductScreen'));

const ProductScreen = props => (
  <Suspense fallback={null}>
    <LazyProductScreen {...props} />
  </Suspense>
);

export default ProductScreen;
