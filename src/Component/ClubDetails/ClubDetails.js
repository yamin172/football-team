import React, { useEffect, useState } from 'react';
import './ClubDetails.css';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Banner from '../Image/male.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFlag,faFutbol,faMars,faCalendarAlt,} from "@fortawesome/free-solid-svg-icons";
    import {faTwitterSquare, faYoutubeSquare, faFacebookSquare,} from "@fortawesome/free-brands-svg-icons";

const ClubDetails = () => {
    const { idTeam } = useParams();

    const [club, setClubs] = useState({});

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then((res) => res.json())
        .then((data) => setClubs(data.teams[0]));
    },[idTeam])

    const {
      strTeamBadge,
      strTeam,
      strCountry,
      strGender,
      strSport,
      intFormedYear,
      strDescriptionEN,
      strFacebook,
      strYoutube,



    } = club;
    
    return (
      <div className="container  mt-4">
        <div className="club-banner">
          <img className="w-25 club-logo" src={strTeamBadge}  alt="img"/>
        </div>
        <div className="container">
          <Card.Body className="bg-primary mt-5 row details-card">
            <div className="col-md-6">
              <div className="mt-5">
                <h1 className="text-white">{strTeam}</h1>
                <h6 className="text-white">
                  <FontAwesomeIcon icon={faCalendarAlt} /> Year: {intFormedYear}
                </h6>
                <h6 className="text-white">
                  <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
                </h6>
                <h6 className="text-white">
                  <FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}
                </h6>
                <h6 className="text-white">
                  <FontAwesomeIcon icon={faMars} /> Gender: {strGender}
                </h6>
              </div>
            </div>
            <div className="col-md-6">
              <img className="details-image w-100" src={Banner} alt="" />
            </div>
          </Card.Body>
        </div>
        <div className="container mt-3 text-justify">
          <p>{strDescriptionEN}</p>
          <p>{strDescriptionEN}</p>
        </div>
        <div className="container mt-5">
          <div className="text-center">
            <a className="social-icons" href="">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a className="social-icons" href={`https://${strYoutube}`}>
              <FontAwesomeIcon icon={faYoutubeSquare} />
            </a>
            <a className="social-icons" href={`https://${strFacebook}`}>
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
          </div>
        </div>
      </div>
    );
};

export default ClubDetails;