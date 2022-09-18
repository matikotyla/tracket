import { FunctionComponent } from "react";

import { SidebarData } from "data";

import SidebarListItem from "./SidebarListItem/SidebarListItem";
import SidebarListProject from "./SidebarListProject/SidebarListProject";

import styles from "./SidebarList.module.scss";

const teams = [
  { name: "Engineering", to: "#", bgColorClass: "bg-indigo-500" },
  { name: "Human Resources", to: "#", bgColorClass: "bg-green-500" },
  { name: "Customer Success", to: "#", bgColorClass: "bg-yellow-500" },
];

const SidebarList: FunctionComponent = () => {
  return (
    <nav className={styles.root}>
      <div className="space-y-1">
        {SidebarData.links.map((item) => (
          <SidebarListItem
            key={item.name}
            to={item.to}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </div>
      <div>
        <h3
          className="px-3 text-base md:text-sm font-medium text-gray-500"
          id="mobile-teams-headline"
        >
          Projects
        </h3>
        <div
          className="mt-1 space-y-1"
          role="group"
          aria-labelledby="mobile-teams-headline"
        >
          {teams.map((team) => (
            <SidebarListProject
              key={team.name}
              to={team.to}
              name={team.name}
              color={team.bgColorClass}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SidebarList;
