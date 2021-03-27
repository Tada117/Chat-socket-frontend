import React, { useState, useEffect } from "react";

import ConversationSearch from "../ConversationSearch";
import ConversationListItem from "../ConversationListItem";
import Toolbar from "../Toolbar";
import ToolbarButton from "../ToolbarButton";
import { userActions } from "../../redux/actions/";

import "./ConversationList.css";

import { Modal, Button } from "antd";
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

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (e) => {
    e.preventDefault();
    dispatch(userActions.logout());
    history.push("/login");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="conversation-list">
      <Toolbar
        title="Messenger"
        leftItems={[
          <ToolbarButton
            key="cog"
            icon="ion-ios-log-out"
            onLogOutClick={showModal}
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
      <Modal
        title="Signing Out?"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        okText="Sign Out"
      >
        <p>Are you sure you want to sign out?</p>
      </Modal>
    </div>
  );
}
