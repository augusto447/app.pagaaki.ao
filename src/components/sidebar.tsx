import { ArrowUpDown, LayoutDashboard, LogOut, Plus, Settings } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export function SideBar() {
  return (
    <aside className="flex flex-col justify-between gap-6 p-6 border-r w-[250px] h-screen border-r-neutral-300">
      <div>
        <div>
          <img className="w-36" src="/logo.svg" alt="" />
        </div>

        <nav className="flex flex-col gap-4 mt-6">
          <NavLink to="/" className="flex items-center gap-1  hover:bg-neutral-100 p-2 rounded-md">
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/my-credits"
            className="flex items-center gap-1 hover:bg-neutral-100 p-2 rounded-md"
          >
            <ArrowUpDown className="w-5 h-5" />
            <span>Meus Creditos</span>
          </NavLink>
          <NavLink
            to="/new-credit"
            className="flex items-center gap-1  hover:bg-neutral-100 p-2 rounded-md"
          >
            <Plus className="w-5 h-5" />
            <span>Solicitar Credito</span>
          </NavLink>
          <NavLink
            to="/settings"
            className="flex items-center gap-1  hover:bg-neutral-100 p-2 rounded-md"
          >
            <Settings className="w-5 h-5 " />
            <span>Configurações</span>
          </NavLink>
        </nav>
      </div>

      <footer className="flex items-ce">
        <NavLink
          to=""
          className="text-rose-500 text-sm p-2 rounded-md hover:bg-rose-100 duration-200 flex items-center gap-2"
        >
          <LogOut className="w-5 h-5" />
          <span>Terminar Sessão</span>
        </NavLink>
      </footer>
    </aside>
  )
}
