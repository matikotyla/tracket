import { FunctionComponent, PropsWithChildren, useState } from "react";
import SidebarDesktop from "./SidebarDesktop/SidebarDesktop";
import SidebarNavigation from "./SidebarNavigation/SidebarNavigation";
import SidebarMobile from "./SidebarMobile/SidebarMobile";
import { useAuth } from "hooks";
import SidebarAside from "./SidebarAside/SidebarAside";

const Sidebar: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { authenticated } = useAuth();

  return (
    <div>
      <SidebarMobile open={sidebarOpen} onClick={setSidebarOpen} />
      <SidebarDesktop show={authenticated} />
      <div className="flex flex-1 flex-col">
        <SidebarNavigation show={authenticated} onClick={setSidebarOpen} />
        {children}
      </div>
      <SidebarAside show={authenticated} />
    </div>
  );
};

export default Sidebar;
