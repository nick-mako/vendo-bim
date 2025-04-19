import React, { useState } from "react";
import { Modal, Button } from "semantic-ui-react";
import useTimeoutTimer from "../hooks/useTimeoutTimer";

const TimeoutModal = () => {
  const { showModal, extendTime } = useTimeoutTimer(2.25);
  const [closeFailed, setCloseFailed] = useState(false);

  const handleReturnToSurvey = () => {
    try {
      window.close();
      // If window.close() doesn't throw but also doesn't close
      setTimeout(() => {
        if (!window.closed) {
          setCloseFailed(true);
        }
      }, 100);
    } catch (e) {
      setCloseFailed(true);
    }
  };

  return (
    <Modal open={showModal} large>
      <Modal.Header>
        <h1>Time Notice</h1>
      </Modal.Header>
      <Modal.Content>
        <p>
          <b>You have spent the required 2 minutes reviewing this website.</b>
        </p>
        <p>You can now return to the survey or extend your time by 1 minute.</p>
        {closeFailed && (
          <p style={{ color: "red" }}>
            Unable to close window automatically. Please close this window
            manually to return to the survey.
          </p>
        )}
      </Modal.Content>
      <Modal.Actions>
        <Button
          secondary
          content="Extend Time"
          labelPosition="right"
          icon="clock"
          onClick={extendTime}
        />
        <Button
          content="Return to Survey"
          labelPosition="right"
          icon="arrow right"
          onClick={handleReturnToSurvey}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default TimeoutModal;
