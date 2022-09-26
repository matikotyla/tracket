import { FunctionComponent } from "react";

import { SidebarData } from "data";
import { useLayout, useProject } from "hooks";

import SidebarListItem from "./SidebarListItem/SidebarListItem";
import SidebarListProject from "./SidebarListProject/SidebarListProject";

import styles from "./SidebarList.module.scss";
import { ModalTypes, ProjectTypes } from "types";

const SidebarList: FunctionComponent = () => {
  const { projects } = useProject();
  const { openModal } = useLayout();

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
          {projects.map((project) => (
            <SidebarListProject
              key={project.id}
              name={project.name}
              color={project.color}
              onClick={() =>
                openModal({
                  type: ModalTypes.Type.EditProject,
                  data: project,
                })
              }
              onButtonClick={() =>
                openModal({
                  type: ModalTypes.Type.RemoveProject,
                  data: { id: project.id },
                })
              }
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SidebarList;
