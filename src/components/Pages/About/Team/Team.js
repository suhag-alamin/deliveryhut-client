import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import TeamMember from "./TeamMember/TeamMember";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://morning-sierra-84457.herokuapp.com/team")
      .then((res) => res.json())
      .then((data) => {
        setTeamMembers(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="text-center py-4">
        <Spinner animation="border" variant="" style={{ color: "#006d77" }} />
      </div>
    );
  }
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
