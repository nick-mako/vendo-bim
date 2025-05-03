import React from "react";
import { Modal } from "semantic-ui-react";

const TaskDescriptionModal = ({ isOpen, onClose }) => {
  return (
    <Modal open={isOpen} onClose={onClose} size="small">
      <Modal.Header>
        <h1>Task Description</h1>
      </Modal.Header>
      <Modal.Content>
        <div style={{ fontSize: "16px", lineHeight: "1.6" }}>
          <p><b>Imagine you are looking to purchase a new Bluetooth speaker. You have come across the following product page.</b></p>
          
          <p>Please take your time to carefully review all the information presented, including:</p>
          <ul>
            <li>Product description</li>
            <li>Customer reviews</li>
            <li>Seller and platform information</li>
          </ul>
          
          <p>After reviewing the page, you will be asked to share your overall impressions and answer questions regarding your evaluation of the product and the information you have seen.</p>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <button className="ui teal large fluid button" onClick={onClose}>
          Continue
        </button>
      </Modal.Actions>
    </Modal>
  );
};

export default TaskDescriptionModal;