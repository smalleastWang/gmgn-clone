import React, { Suspense } from 'react';
import RouterView from './routes';
import { HashRouter } from 'react-router-dom';


export default function App() {
  return <HashRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterView />
    </Suspense>
  </HashRouter>
}