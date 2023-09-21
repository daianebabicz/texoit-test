import React from 'react';
import './Dashboard.css';

const Dashboard = ({ dashboardData }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-section">
        <h2>Anos com mais de um vencedor</h2>
        <ul>
          {dashboardData.yearsWithMultipleWinners.map((yearData) => (
            <li key={yearData.year}>
              {yearData.year} ({yearData.winnerCount} vencedores)
            </li>
          ))}
        </ul>
      </div>
      <div className="dashboard-section">
        <h2>Três estúdios com mais vitórias</h2>
        <ul>
          {dashboardData.topStudios.map((studio) => (
            <li key={studio.name}>
              {studio.name}: {studio.winCount} vitórias
            </li>
          ))}
        </ul>
      </div>
      <div className="dashboard-section">
        <h2>Produtores com maior intervalo entre vitórias</h2>
        <ul>
          {dashboardData.producersWithMaxMinInterval.max.map((producerData) => (
            <li key={producerData.producer}>
              {producerData.producer}: {producerData.interval} anos (
              {producerData.previousWin} - {producerData.followingWin})
            </li>
          ))}
        </ul>
      </div>
      <div className="dashboard-section">
        <h2>Vencedores de 2022</h2>
        <ul>
          {dashboardData.winnersByYear.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
