import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  Task,
} from "components";
import { useAuth, useLayout, useUser } from "hooks";
import { withAnimation } from "hoc";
import { CommonAnimations } from "animations";
import { FunctionComponent } from "react";
import { ModalTypes } from "types";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Courtney Henry",
    title: "Designer",
    email: "courtney.henry@example.com",
    role: "Admin",
  },
  {
    name: "Tom Cook",
    title: "Director, Product Development",
    email: "tom.cook@example.com",
    role: "Member",
  },
  {
    name: "Whitney Francis",
    title: "Copywriter",
    email: "whitney.francis@example.com",
    role: "Admin",
  },
  {
    name: "Leonard Krasner",
    title: "Senior Designer",
    email: "leonard.krasner@example.com",
    role: "Owner",
  },
  {
    name: "Floyd Miles",
    title: "Principal Designer",
    email: "floy.dmiles@example.com",
    role: "Member",
  },
  // More people...
];

const Dashboard: FunctionComponent = () => {
  const { authenticated, signOut } = useAuth();
  const { user } = useUser();
  const { openModal } = useLayout();

  return (
    <main className="flex-1">
      <div className="pb-4">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
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
              {/* {people.map((person) => (
                <TableRow key={person.email}>
                  <TableData>
                    <p className="pl-1 sm:pl-3 text-sm font-medium text-gray-900">
                      {person.name}
                    </p>
                  </TableData>
                  <TableData>
                    <p className="text-sm text-gray-500">{person.title}</p>
                  </TableData>
                  <TableData>
                    <p className="text-sm text-gray-500">{person.email}</p>
                  </TableData>
                  <TableData>
                    <p className="text-sm text-gray-500">{person.role}</p>
                  </TableData>
                  <TableData align="right">
                    <p className="inline-flex text-sm text-gray-500">
                      {person.role}
                    </p>
                    <a
                      href="#"
                      className="pr-1 sm:pr-3 text-teal-600 hover:text-teal-900 text-sm font-medium"
                    >
                      Edit
                    </a>
                  </TableData>
                </TableRow>
              ))} */}
              <Task
                content="Read a book"
                description="Do some reading"
                time="14 Sep 14:00"
                priority="Important"
                tag="Sport"
                color="green"
              />
              <Task
                content="Swimming"
                description="Start swimming finally"
                time="11 Oct 17:00"
                priority="Normal"
                tag="Self"
                color="indigo"
              />
              <Task
                content="Practice meditation"
                description="Change your mindeset with meditation"
                time="7 Jan 07:00"
                priority="Critical"
                tag="Mind"
                color="sky"
              />
              <Task
                content="Cycling"
                description="Use a bike instead of a car"
                time="21 Apr 12:00"
                priority="Normal"
                tag="Health"
                color="red"
              />
              <Task
                content="Hit the gym"
                description="It’s the key to the healthy lifestyle"
                time="4 Dec 20:00"
                priority="Important"
                tag="Sport"
                color="green"
              />
              <Task
                content="Running"
                description="Need to lose some weight, that’s the way to do it"
                time="10 Nov 17:00"
                priority="Low"
                tag="Sport"
                color="green"
              />
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="py-4">
        <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
      </div>
    </main>
  );
};

export default withAnimation(Dashboard, CommonAnimations.page);
