import React, { lazy, Suspense } from 'react';

const LazyCartScreen = lazy(() => import('./CartScreen'));

const CartScreen = props => (
  <Suspense fallback={null}>
    <LazyCartScreen {...props} />
  </Suspense>
);

export default CartScreen;
