import { FunctionComponent } from "react";

import { withAnimation } from "hoc";
import { CommonAnimations } from "animations";

import DashboardHeader from "./DashboardHeader/DashboardHeader";
import DashboardTable from "./DashboardTable/DashboardTable";

import styles from "./Dashboard.module.scss";

const Dashboard: FunctionComponent = () => {
  return (
    <main className={styles.root}>
      <DashboardHeader />
      <DashboardTable />
    </main>
  );
};

export default withAnimation(Dashboard, CommonAnimations.page);
