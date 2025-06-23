import React, { Suspense } from 'react';
import RouterView from './routes';
import { BrowserRouter } from 'react-router-dom';


export default function App() {
  return <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterView />
    </Suspense>
  </BrowserRouter>
}