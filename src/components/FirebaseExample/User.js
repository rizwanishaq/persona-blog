import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { ListGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config";

const User = ({ user }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        {user.name} (<span>{user.age}</span>)
      </div>
      <div>
        <AiFillDelete
          onClick={async (e) => {
            const userDoc = doc(db, "users", user.id);
            await deleteDoc(userDoc);
            toast.success("Transaction deleted");
          }}
        />
      </div>
    </ListGroup.Item>
  );
};

export default User;
