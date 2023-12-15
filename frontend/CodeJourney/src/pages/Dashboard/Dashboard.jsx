// import { UserCard } from "../components/UserCard/UserCard";
import { DashboardCard } from "../../components/DashboardCard/DashboardCard";
import { SideNav } from "../../components/SideNav/SideNav";
import "./Dashboard.css";
export const Dashboard = () => {
  return (
    <div className="page__container">
      <SideNav />
      <main>
        <DashboardCard />
      </main>
    </div>
  );
};
