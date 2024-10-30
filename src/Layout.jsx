
import { Outlet } from "react-router-dom"
import DashboardLayout from "./components/DashboardLayout"



function Layout() {
  return (
      <>
          <div className="flex">
              <div className="overflow-hidden fixed">
                  <DashboardLayout/>
              </div>
              <div className="overflow-y-scroll ml-72">
                  <Outlet/>
              </div>
              
              
          </div>
          
      </>
  )
}

export default Layout



