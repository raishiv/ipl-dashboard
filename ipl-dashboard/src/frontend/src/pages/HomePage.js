import { React, useEffect, useState } from 'react';


import './HomePage.scss';
import { TeamTile } from '../components/TeamTile';

export const HomePage = () => {

    const [teams, setTeam] = useState([]);
    useEffect(
        () => {
            const fetchAllTeam = async () => {
                const response = await fetch(`http://localhost:8080/team`);
                const data = await response.json();
                setTeam(data);
            };
            fetchAllTeam();

        }, []

    );
    


    return (
        <div className="HomePage">
            <div className="header-section">
                <h1 className="app-name">IPL dashboard</h1>
            </div>
        <div className="team-grid">
            { teams.map(team => <TeamTile teamName={team.teamName} />)}
            </div>
        </div>
    );
}