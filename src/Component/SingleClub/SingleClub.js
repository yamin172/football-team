import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const SingleClub = (props) => {
    const { idTeam, strTeam, strSport, strTeamBadge } = props.club;
    return (
        <div className="col-md-4 my-3 ">
            <Card className="p-4 shadow border-light" style={{ width: "22rem" }}>
            <Card.Img variant="top" src={strTeamBadge} />
            <Card.Body>
                <div className="text-center">
                <Card.Title>{strTeam}</Card.Title>
                <p>Sports type: {strSport}</p>
                <Button as={Link} to={`/club/${idTeam}`} variant="primary">
                    Explore <FontAwesomeIcon icon={faLongArrowAltRight} />
                </Button>
                </div>
            </Card.Body>
            </Card>
        </div>
    );
};

export default SingleClub;