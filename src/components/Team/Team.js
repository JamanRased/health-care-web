import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

const Team = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch('teamdata.JSON')
        .then(res =>res.json())
        .then(data => setTeam(data));

    }, [])
    return (
        <div>
            <div className="team-container">
                <h1>Meet Our Team</h1>
                <p>Best Specialists in one Place</p>
                <div className='row'>
                    {team.map((teaam) =>(
                        <div key={teaam.id}className='service-area  col-md-4'>
                            <div className="p-3 m-2 h-50 w-75">
                                <div className="image-area">
                                    <img className="img-fluid" src={teaam.img}alt=''/>
                                </div>
                                <div className="des-area">
                                    <h3>{teaam.name}</h3>
                                    <strong>{teaam.position}</strong>
                                    <br/>
                                    <Button>Detailes</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;