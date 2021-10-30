import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TeamMember from "./TeamMember/TeamMember";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    fetch("https://morning-sierra-84457.herokuapp.com/team")
      .then((res) => res.json())
      .then((data) => {
        setTeamMembers(data);
      });
  }, []);
  console.log(teamMembers);
  return (
    <>
      <Container className="py-5">
        <h2 className="text-center fs-1">
          Our <span className="colored-text">Team</span>
        </h2>
        <Row xs={1} md={2} lg={4} className="g-4 mt-3">
          {teamMembers.map((member) => (
            <Col key={member._id}>
              <TeamMember member={member}></TeamMember>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Team;
