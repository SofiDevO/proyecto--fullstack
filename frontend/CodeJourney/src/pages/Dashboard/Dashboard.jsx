import { DashboardCard } from "../../components/DashboardCard/DashboardCard";
import { SideNav } from "../../components/SideNav/SideNav";
import { UserCard } from "../../components/UserCard/UserCard";
import "./Dashboard.css";
export const Dashboard = () => {
  return (
    <div className="page__container">
      <SideNav />
      <main className="main__dashboard">
        <DashboardCard />
        <UserCard />
      </main>
    </div>
  );
};
