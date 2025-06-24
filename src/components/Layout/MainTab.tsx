import { Link, useLocation } from 'react-router-dom';
import './style.scss'
import { cn } from '@/utils/utils';

export default function MainTab() {
  const tabs = [
    {
      path: '/',
      title: '战壕',
    },
    {
      path: '/new-pair',
      title: '新币',
    },
    {
      path: '/trend',
      title: '热门',
    },
    {
      path: '/trade',
      title: '跟单',
    },
    {
      path: '/monitor',
      title: '监控',
    },
    {
      path: '/follow',
      title: '追踪',
    },
    {
      path: '/holding',
      title: '持仓',
    },
  ];
  // 获取当前路由
  const location = useLocation();
  console.log(location)
  return (
    <div className="navigation">
      {tabs.map((tab) => (
        <Link
          key={tab.path}
          className={cn('nav-item', {
            active: location.pathname === tab.path,
          })}
          to={tab.path}
        >
          {tab.title}
        </Link>
      ))}
    </div>
  );
}
