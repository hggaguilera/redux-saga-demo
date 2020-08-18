import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

const UsersList = ({ users }) => {
  return (
    <ListGroup className="py-4">
      {users
        .sort((a, b) => {
          if (a.firstName > b.firstName) {
            return 1;
          } else if (a.firstName < b.firstName) {
            return -1;
          } else if (a.lastName > b.lastName) {
            return 1;
          } else if (a.lastName < b.lastName) {
            return -1;
          } else {
            return 0;
          }
        })
        .map((user) => (
          <ListGroupItem key={user.id}>
            <div className="d-flex">
              <div className="flex-grow-1 my-auto mx-0">
                {user.firstName} {user.lastName}
              </div>
              <div>
                <Button outline color="danger">
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
