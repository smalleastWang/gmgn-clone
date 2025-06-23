import React from 'react';
import Nav from './Nav';
import MainTab from './MainTab';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="trading-container">
      <Nav />
      <MainTab />
      <Outlet />
    </div>
  );
}

