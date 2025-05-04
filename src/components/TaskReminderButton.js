import React from "react";
import { Button } from "semantic-ui-react";

const TaskReminderButton = ({ onClick }) => {
  return (
    <Button
      circular
      icon="question"
      size="massive"
      teal
      primary
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 1000,
        width: "70px",
        height: "70px",
        padding: "1.5rem",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
      }}
      onClick={onClick}
    />
  );
};

export default TaskReminderButton;