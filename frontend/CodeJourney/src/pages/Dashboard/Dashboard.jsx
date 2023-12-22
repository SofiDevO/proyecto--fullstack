// import { UserCard } from "../components/UserCard/UserCard";
import { DashboardCard } from "../../components/DashboardCard/DashboardCard";
import { SideNav } from "../../components/SideNav/SideNav";
import { UserCard } from "../../components/UserCard/UserCard";
import "./Dashboard.css";
export const Dashboard = () => {
  return (
    <div className="page__container">
      <SideNav />
      <main>
        <DashboardCard />
        <UserCard />
      </main>
    </div>
  );
};
