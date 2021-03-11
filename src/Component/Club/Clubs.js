import React from 'react';
import { useEffect, useState } from "react";
import SingleClub from '../SingleClub/SingleClub';
import "./Club.css";
import Banner from '../Image/banner.jpg';
import Image from "react-bootstrap/Image";

const Clubs = () => {
    const [clubs, setClubs] = useState([]);
    useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
    .then((res) => res.json())
    .then((data) => setClubs(data.teams));
    }, []);
    return (
        <div className="container  mt-5">
                <h1 className="banner-title">Sports Clubs</h1>
            <Image src={Banner} fluid alt="banner image"/>
            <div className="row mt-5">
            <div className="home-banner"></div>
            {
            clubs.map((club) => (<SingleClub key={club.idTeam} club={club} />))
            }
            </div>
        </div>
    );
};

export default Clubs;