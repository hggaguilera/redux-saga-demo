import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { getUsersRequest } from "../actions/users";
import NewUser from "./NewUser";
import UsersList from "./UsersList";

const App = ({ getUsersRequest, users }) => {
  useEffect(() => {
    getUsersRequest();
  });
  const handleSubmit = ({ firstName, lastName }) => {
    console.log(firstName, lastName);
  };
  return (
    <main>
      <Container>
        <Row className="pt-4">
          <Col sm={6} className="offset-3">
            <NewUser onSubmit={handleSubmit} />
            <UsersList users={users.items} />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default connect(({ users }) => ({ users }), { getUsersRequest })(App);
