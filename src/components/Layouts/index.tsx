import './styles.css';

import { Outlet } from 'react-router';

export function Layout() {
  return (
    <div>
      <header className="user">
        <p>Hello, Ruan</p>
      </header>

      <Outlet />

      <footer>
        <span> All rights reserveds</span>
      </footer>
    </div>
  );
}
