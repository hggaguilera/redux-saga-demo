import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { getUsersRequest } from "../actions/users";

const App = ({ getUsersRequest, users }) => {
  useEffect(() => {
    getUsersRequest();
  });

  return (
    <main>
      <Container>
        <Row>
          <Col sm={12}>Hello</Col>
        </Row>
      </Container>
    </main>
  );
};

export default connect(({ users }) => ({ users }), { getUsersRequest })(App);
