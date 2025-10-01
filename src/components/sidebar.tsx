import { LayoutDashboard } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function SideBar() {
  return (
    <aside className="flex flex-col gap-6 p-6 border-r w-[250px] h-screen border-r-neutral-300">
      <div>
        <img className="w-36" src="/logo.svg" alt="" />
      </div>
      <nav className="flex flex-col gap-6 mt-6">
        <NavLink to="/" className="flex items-center gap-1">
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/my-credits">
          <span>Meus Creditos</span>
        </NavLink>
        <NavLink to="/new-credit">
          <span>Solicitar Credito</span>
        </NavLink>
        <NavLink to="/settings">
          <span>Configurações</span>
        </NavLink>
      </nav>
    </aside>
  );
}
