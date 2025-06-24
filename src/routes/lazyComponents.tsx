
import { lazy } from 'react';

export const Trading = lazy(() => import('@/pages/Trading'));
export const NewPair = lazy(() => import('@/pages/Trading/NewPair'));
export const Trend = lazy(() => import('@/pages/Trading/Trend'));
export const Discover = lazy(() => import('@/pages/Trading/Discover'));
export const Monitor = lazy(() => import('@/pages/Trading/Monitor'));
export const Follow = lazy(() => import('@/pages/Trading/Follow'));
export const Holding = lazy(() => import('@/pages/Trading/Holding'));
export const Wallet = lazy(() => import('@/pages/Wallet'));
export const NotFound = lazy(() => import('@/pages//Error/NotFound'));
