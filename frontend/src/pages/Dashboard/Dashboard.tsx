import { Sidebar } from "components";
import { useAuth, useUser } from "hooks";
import React from "react";

const Dashboard = () => {
  const { authenticated, signOut } = useAuth();
  const { user, counter } = useUser();

  return (
    <Sidebar>
      <main className="flex-1">
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h2>Hi {user?.firstName}</h2>
            <h3>{authenticated ? "yes" : "no"}</h3>
            {/* Replace with your content */}
            <h4>{counter}</h4>
            <div className="py-4">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
            </div>
            <button onClick={signOut}>Logout</button>
            {/* /End replace */}
          </div>
        </div>
      </main>
    </Sidebar>
  );
};

export default Dashboard;
