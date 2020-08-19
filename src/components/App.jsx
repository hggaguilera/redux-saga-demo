import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { Alert, Col, Container, Row } from "reactstrap";
import {
  createUserRequest,
  deleteUserRequest,
  getUsersRequest,
  usersError,
} from "../actions/users";
import NewUser from "./NewUser";
import UsersList from "./UsersList";

const App = ({
  createUserRequest,
  getUsersRequest,
  deleteUserRequest,
  usersError,
  users: { items, error },
}) => {
  const requestUserCallback = useCallback(() => {
    getUsersRequest();
  }, [getUsersRequest]);

  useEffect(() => {
    requestUserCallback();
  }, [requestUserCallback]);

  const handleCloseAlert = () => {
    usersError({ error: null });
  };

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
            <Alert color="danger" isOpen={!!error} toggle={handleCloseAlert}>
              {error}
            </Alert>
            <NewUser onSubmit={handleSubmit} />
            <UsersList users={items} onDeleteUser={handleDeleteUser} />
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
  usersError,
})(App);
