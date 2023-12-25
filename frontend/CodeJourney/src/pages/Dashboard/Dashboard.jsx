// Dashboard.js

import React, { useState } from "react";
import { DashboardCard } from "../../components/DashboardCard/DashboardCard";
import { SideNav } from "../../components/SideNav/SideNav";
import { UserCard } from "../../components/UserCard/UserCard";
import "./Dashboard.css";

export const Dashboard = () => {
  const [filteredTechs, setFilteredTechs] = useState(null);

  const handleFilteredTechs = (techs) => {
    setFilteredTechs(techs);
  };

  return (
    <div className="page__container">
      <SideNav handleFilteredTechs={handleFilteredTechs} />
      <main className="main__dashboard">
        <DashboardCard filteredTechs={filteredTechs} />
        <UserCard />
      </main>
    </div>
  );
};
