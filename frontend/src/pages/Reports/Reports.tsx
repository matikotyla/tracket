import { CommonAnimations } from "animations";
import { withAnimation } from "hoc";
import React from "react";

const Reports = () => {
  return (
    <main className="flex-1">
      <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
      <div className="py-4">
        <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
      </div>
    </main>
  );
};

export default withAnimation(Reports, CommonAnimations.page);
