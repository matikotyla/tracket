import React from "react";

const SettingsBilling = () => {
  return (
    <div className="py-4 flex space-x-8">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-medium text-gray-900">Billing</h2>
          <p className="mt-1 text-sm font-normal text-gray-500">
            This information will be displayed publicly so be careful what you
            share. Remember that everyone can see this.
          </p>
        </div>
        <div className="lg:col-span-3 h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
      </div>
    </div>
  );
};

export default SettingsBilling;
