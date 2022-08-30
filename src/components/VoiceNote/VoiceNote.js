import React from "react";
import { ListGroupItem } from "react-bootstrap";

const VoiceNote = ({ note }) => {
  return <ListGroupItem className="text-center">{note.text}</ListGroupItem>;
};

export default VoiceNote;
