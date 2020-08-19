import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

const UsersList = ({ users, onDeleteUser }) => {
  return (
    <ListGroup className="py-4">
      {users.map((user) => (
        <ListGroupItem key={user.id}>
          <div className="d-flex">
            <div className="flex-grow-1 my-auto mx-0">
              {user.firstName} {user.lastName}
            </div>
            <div>
              <Button
                outline
                color="danger"
                onClick={() => onDeleteUser(user.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default UsersList;
