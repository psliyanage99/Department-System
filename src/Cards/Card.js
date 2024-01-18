import React from 'react';
import DashboardCard from './DashboardCard';
import './Card.css'
import { FaDollarSign } from 'react-icons/fa';
import { RiStackLine } from "react-icons/ri";
import { PiSquaresFour } from "react-icons/pi";
import { TbWaveSawTool } from "react-icons/tb";




const Card = () => {
  return (
    <div>
      <div className="dashboard-cards-container">
        <DashboardCard
          title="EARNINGS" id="card1"
          value="$500"
          icon={<i><FaDollarSign /></i>} // Replace with your icon
        />
        <DashboardCard
          title="SALES STATS" id="card2"
          value="70% Up  For 2021"
          icon={<i><RiStackLine /></i>} // Replace with your icon
        />
        <DashboardCard
          title="NEW CLIENTS" id="card3"
          value="450 within 30 days"
          icon={<i><PiSquaresFour /></i>} // Replace with your icon
        />
        <DashboardCard
          title="K P I" id="card4"
          value="18"
          icon={<i><TbWaveSawTool /></i>} // Replace with your icon
        />
      </div>
    </div>
  );
};

export default Card;
