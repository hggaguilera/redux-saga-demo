import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import {
  createUserRequest,
  deleteUserRequest,
  getUsersRequest,
} from "../actions/users";
import NewUser from "./NewUser";
import UsersList from "./UsersList";

const App = ({
  createUserRequest,
  getUsersRequest,
  deleteUserRequest,
  users,
}) => {
  useEffect(() => {
    getUsersRequest();
  });

  const handleSubmit = ({ firstName, lastName }) => {
    createUserRequest({ firstName, lastName });
  };

  const handleDeleteUser = (userId) => {
    deleteUserRequest(userId);
  };

  return (
    <main>
      <Container>
        <Row className="pt-4">
          <Col sm={6} className="offset-3">
            <NewUser onSubmit={handleSubmit} />
            <UsersList users={users.items} onDeleteUser={handleDeleteUser} />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default connect(({ users }) => ({ users }), {
  createUserRequest,
  getUsersRequest,
  deleteUserRequest,
})(App);
