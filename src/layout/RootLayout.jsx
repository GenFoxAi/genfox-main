import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function RootLayout() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden px-2 py-2 scroll-smooth">
      <nav>
        <Navbar />
      </nav>
      <Outlet />
    </div>
  );
}