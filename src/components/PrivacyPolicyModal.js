import React from "react";
import { Modal } from "semantic-ui-react";
import PrivacyPolicy from "./PrivacyPolicy";

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  return (
    <Modal open={isOpen} onClose={onClose} size="large">
      <Modal.Header>
        <h1>Privacy Policy</h1>
      </Modal.Header>
      <Modal.Content scrolling>
        <PrivacyPolicy />
      </Modal.Content>
      <Modal.Actions>
        <button className="ui primary teal large fluid button" onClick={onClose}>
          Close
        </button>
      </Modal.Actions>
    </Modal>
  );
};

export default PrivacyPolicyModal;
