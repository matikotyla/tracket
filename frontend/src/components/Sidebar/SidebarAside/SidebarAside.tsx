import { CommonAnimations } from "animations";
import { AnimationData } from "data";
import { motion, AnimatePresence } from "framer-motion";
import React, { FunctionComponent } from "react";
import { SidebarAsideProps } from "./SidebarAside.props";

const people = [
  {
    name: "Whitney Francis",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
  },
  {
    name: "Floyd Miles",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
  },
  {
    name: "Courtney Henry",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
  },
];

const activityItems = [
  {
    id: 1,
    person: people[0],
    project: "Workcation",
    commit: "2d89f0c8",
    environment: "production",
    time: "1h",
    text: "Added four new tasks in the Home project",
  },
  {
    id: 2,
    person: people[1],
    project: "Workcation",
    commit: "11464223",
    environment: "staging",
    time: "12h",
    text: "Created a new project called Home",
  },
  {
    id: 3,
    person: people[0],
    project: "Easywire",
    commit: "dad28e95",
    environment: "production",
    time: "2d",
    text: "Completed two tasks in the Sports project",
  },
  {
    id: 4,
    person: people[2],
    project: "Easywire",
    commit: "624bc94c",
    environment: "production",
    time: "5d",
    text: "Added three new tasks in the Family project",
  },
  {
    id: 5,
    person: people[3],
    project: "Resumaid",
    commit: "5e136005",
    environment: "staging",
    time: "1w",
    text: "Created a new project called Trip",
  },
];

const recentHires = [
  {
    name: "Leonard Krasner",
    handle: "leonardkrasner",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
  },
  {
    name: "Floyd Miles",
    handle: "floydmiles",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
  },
  {
    name: "Emily Selman",
    handle: "emilyselman",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
  },
  {
    name: "Kristin Watson",
    handle: "kristinwatson",
    imageUrl:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
  },
];

const SidebarAside: FunctionComponent<SidebarAsideProps> = ({ show }) => {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="hidden 2xl:flex 2xl:w-96 2xl:flex-col 2xl:fixed 2xl:inset-y-0 2xl:right-0 z-0"
          {...AnimationData.animation}
          key={1}
          variants={CommonAnimations.friends}
        >
          <div className="flex flex-col flex-grow border-l border-gray-200 bg-white overflow-y-auto mt-16 py-6">
            <div className="px-6">
              <h2 className="text-2xl font-semibold text-gray-900">Friends</h2>
              <div className="py-4">
                <div>
                  <ul role="list" className="divide-y divide-gray-200">
                    {activityItems.map((activityItem) => (
                      <li key={activityItem.id} className="py-4">
                        <div className="flex space-x-3">
                          <img
                            className="h-6 w-6 rounded-full"
                            src={activityItem.person.imageUrl}
                            alt=""
                          />
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium">
                                {activityItem.person.name}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {activityItem.time}
                              </p>
                            </div>
                            <p className="text-sm text-gray-500">
                              {/* Deployed {activityItem.project} (
                              {activityItem.commit} in master) to{" "}
                              {activityItem.environment} */}
                              {activityItem.text}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="px-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Suggested friends
              </h2>
              <div className="flow-root mt-6">
                <ul role="list" className="-my-5 divide-y divide-gray-200">
                  {recentHires.map((person) => (
                    <li key={person.handle} className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            className="h-8 w-8 rounded-full"
                            src={person.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {person.name}
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            {"@" + person.handle}
                          </p>
                        </div>
                        <div>
                          <a
                            href={person.href}
                            className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  View all
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          {...AnimationData.animation}
          key={2}
          variants={CommonAnimations.friends}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default SidebarAside;
