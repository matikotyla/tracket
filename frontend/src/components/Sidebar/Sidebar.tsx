import { FunctionComponent, PropsWithChildren, useState } from "react";
import SidebarDesktop from "./SidebarDesktop/SidebarDesktop";
import SidebarNavigation from "./SidebarNavigation/SidebarNavigation";
import SidebarMobile from "./SidebarMobile/SidebarMobile";

const Sidebar: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <SidebarMobile open={sidebarOpen} onClick={setSidebarOpen} />
      <SidebarDesktop />
      <div className="flex flex-1 flex-col md:pl-64">
        <SidebarNavigation onClick={setSidebarOpen} />
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
