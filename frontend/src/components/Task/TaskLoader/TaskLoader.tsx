import { FunctionComponent } from "react";
import { TableData, TableRow } from "components";

const TaskLoader: FunctionComponent = () => {
  return (
    <TableRow>
      <TableData>
        <div className="flex space-x-4">
          <div className="animate-pulse w-6 h-6 bg-slate-200 rounded"></div>
          <div>
            <div className="animate-pulse w-24 h-5 bg-slate-200 rounded"></div>
            <div className="mt-1 animate-pulse w-48 h-5 bg-slate-200 rounded"></div>
          </div>
        </div>
      </TableData>
      <TableData>
        <div className="animate-pulse w-36 h-5 bg-slate-200 rounded"></div>
      </TableData>
      <TableData>
        <div className="animate-pulse w-24 h-5 bg-slate-200 rounded"></div>
      </TableData>
      <TableData>
        <div className="animate-pulse w-24 h-5 bg-slate-200 rounded"></div>
      </TableData>
      <TableData>
        <div className="flex space-x-2">
          <div className="animate-pulse w-6 h-6 bg-slate-200 rounded"></div>
          <div className="animate-pulse w-6 h-6 bg-slate-200 rounded"></div>
        </div>
      </TableData>
    </TableRow>
  );
};

export default TaskLoader;
