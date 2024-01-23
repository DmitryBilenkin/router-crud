import { Outlet } from "react-router-dom";
import './Layout.css'

function Layout() {
  return (
    <div className="app">
        <Outlet />
    </div>
  )
}

export default Layout;
