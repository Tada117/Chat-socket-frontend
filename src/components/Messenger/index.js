import React from "react";
import { withRouter } from "react-router-dom";
import ConversationList from "../ConversationList";
import MessageList from "../MessageList";

import "./Messenger.css";
function Messenger(props) {
  return (
    <div className="messenger">
      <div className="scrollable sidebar">
        <ConversationList />
      </div>

      <div className="scrollable content">
        <MessageList />
      </div>
    </div>
  );
}

export default withRouter(Messenger);
