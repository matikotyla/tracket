import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  Task,
  TaskLoader,
} from "components";
import { useAuth, useLayout, useTask, useUser } from "hooks";
import { withAnimation } from "hoc";
import { CommonAnimations } from "animations";
import { FunctionComponent, useEffect } from "react";
import { ModalTypes } from "types";
import {
  EnvelopeIcon,
  FolderIcon,
  BeakerIcon,
  FolderOpenIcon,
} from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/20/solid";
import ButtonSpin from "components/Button/ButtonSpin/ButtonSpin";

const Dashboard: FunctionComponent = () => {
  const {
    tasks,
    getAll: { invoke, loading },
  } = useTask();
  const { openModal } = useLayout();

  useEffect(() => {
    invoke();
  }, []);

  return (
    <main className="flex-1">
      <div className="pb-4">
        <div className="sm:flex sm:items-end">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
              onClick={() =>
                openModal({
                  type: ModalTypes.Type.CreateTask,
                  data: null,
                })
              }
            >
              <BeakerIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
              Add task
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
              onClick={() =>
                openModal({
                  type: ModalTypes.Type.AddProject,
                  data: null,
                })
              }
            >
              <FolderIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
              Add project
            </button>
          </div>
        </div>
        <div className="mt-4">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>
                  <p className="pl-1 sm:pl-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                    Name
                  </p>
                </TableHeader>
                <TableHeader>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    Title
                  </p>
                </TableHeader>
                <TableHeader>
                  <p className="text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                    Email
                  </p>
                </TableHeader>
                <TableHeader>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    Role
                  </p>
                </TableHeader>
                <TableHeader>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    More
                  </p>
                </TableHeader>
                {/* <th scope="col" className="py-3 pl-3 pr-4 sm:pr-6"></th> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                [1, 2, 3, 4].map((i) => <TaskLoader key={i} />)
              ) : tasks.length > 0 ? (
                tasks.map((task) => (
                  <Task
                    key={task.id}
                    content={task.content}
                    description={task.description}
                    time="14 Sep 14:00"
                    priority="Important"
                    tag={task.project.name}
                    color={task.project.color}
                    onUpdateClick={() =>
                      openModal({
                        type: ModalTypes.Type.UpdateTask,
                        data: task,
                      })
                    }
                    onDeleteClick={() =>
                      openModal({
                        type: ModalTypes.Type.DeleteTask,
                        data: {
                          id: task.id,
                        },
                      })
                    }
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={5}>
                    <div className="relative h-96 w-full flex items-center justify-center rounded-lg">
                      <div className="text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            vectorEffect="non-scaling-stroke"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                          />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">
                          No tasks
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Get started by creating a new task.
                        </p>
                        <div className="mt-6">
                          {/* <button
                          type="button"
                          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <PlusIcon
                            className="-ml-1 mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                          Add task
                        </button> */}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
};

export default withAnimation(Dashboard, CommonAnimations.page);

// {
//   !loading ? (
//     tasks.length === 0 ? (
//       tasks.map((task) => (
//         <Task
//           key={task.id}
//           content={task.content}
//           description={task.description}
//           time="14 Sep 14:00"
//           priority="Important"
//           tag={task.project.name}
//           color={task.project.color}
//         />
//       ))
//     ) : (
//       <tr>
//         <td colSpan={5}>
//           <div className="relative h-96 w-full flex items-center justify-center rounded-lg">
//             <div className="text-center">
//               <svg
//                 className="mx-auto h-12 w-12 text-gray-400"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   vectorEffect="non-scaling-stroke"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
//                 />
//               </svg>
//               <h3 className="mt-2 text-sm font-medium text-gray-900">
//                 No tasks
//               </h3>
//               <p className="mt-1 text-sm text-gray-500">
//                 Get started by creating a new task.
//               </p>
//               <div className="mt-6">
//                 <button
//                   type="button"
//                   className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 >
//                   <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
//                   Add task
//                 </button>
//               </div>
//             </div>
//           </div>
//         </td>
//       </tr>
//     )
//   ) : (
//     [1, 2, 3, 4].map((i) => <TaskLoader key={i} />)
//   );
// }
