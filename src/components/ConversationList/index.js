import React, { useState, useEffect } from "react";
import ConversationSearch from "../ConversationSearch";
import ConversationListItem from "../ConversationListItem";
import Toolbar from "../Toolbar";
import ToolbarButton from "../ToolbarButton";

import "./ConversationList.css";

import { userActions } from "../../redux/actions/";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations();
  }, []);

  const getConversations = () => {
    // axios.get('https://randomuser.me/api/?results=20').then(response => {
    //     let newConversations = response.data.results.map(result => {
    //       return {
    //         photo: result.picture.large,
    //         name: `${result.name.first} ${result.name.last}`,
    //         text: 'Hello world! This is a long message that needs to be truncated.'
    //       };
    //     });
    //     setConversations([...conversations, ...newConversations])
    // });
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(userActions.logout());
    history.push("/login");
  };

  return (
    <div className="conversation-list">
      <Toolbar
        title="Messenger"
        leftItems={[
          <ToolbarButton
            key="cog"
            icon="ion-ios-log-out"
            onLogOutClick={handleLogOut}
          />,
        ]}
        rightItems={[
          <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />,
        ]}
      />
      <ConversationSearch />
      {conversations.map((conversation) => (
        <ConversationListItem key={conversation.name} data={conversation} />
      ))}
    </div>
  );
}
