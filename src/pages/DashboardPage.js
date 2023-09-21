import React, { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';

const fetchDashboardData = async () => {
  return {
    someData: 'Valor fictício',
    anotherData: 42,
  };
};

const DashboardPage = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDashboardData();
        setDashboardData(data);
      } catch (error) {
        console.error('Erro ao buscar dados do dashboard:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Página do Dashboard</h1>
      {dashboardData ? <Dashboard dashboardData={dashboardData} /> : <p>Carregando dados...</p>}
    </div>
  );
};

export default DashboardPage;
