import { FunctionComponent, PropsWithChildren, useState } from "react";
import SidebarDesktop from "./SidebarDesktop/SidebarDesktop";
import SidebarNavigation from "./SidebarNavigation/SidebarNavigation";
import SidebarMobile from "./SidebarMobile/SidebarMobile";
import { useAuth } from "hooks";

const Sidebar: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { authenticated } = useAuth();

  return (
    <div>
      <SidebarMobile open={sidebarOpen} onClick={setSidebarOpen} />
      <SidebarDesktop show={authenticated} />
      <div className="flex flex-1 flex-col md:pl-64">
        <SidebarNavigation show={authenticated} onClick={setSidebarOpen} />
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
