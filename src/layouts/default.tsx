import { Outlet } from "react-router-dom";
import { SideBar } from "../components/sidebar";
import { Header } from "../components/header";

export function DefaultLayout() {
  return (
    <main className="flex">
      <SideBar />

      <div className="flex-1">
        <Header />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
